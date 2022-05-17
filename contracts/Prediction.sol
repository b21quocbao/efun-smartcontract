// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./IEvent.sol";
import "./IHelper.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

// import "@openzeppelin/contracts/utils/Strings.sol";

// import "hardhat/console.sol";

contract Prediction is OwnableUpgradeable, ReentrancyGuardUpgradeable {
    using SafeERC20Upgradeable for IERC20Upgradeable;

    mapping(address => mapping(address => mapping(uint256 => EDataTypes.Prediction))) public predictions;
    mapping(address => mapping(uint256 => EDataTypes.PredictStats)) private predictStats;
    mapping(address => mapping(uint256 => mapping(string => uint256))) private predictOptionStats;
    mapping(address => mapping(uint256 => uint256)) private sponsorTotal;

    uint256 private oneHundredPrecent;
    address payable public feeCollector;
    address payable public rewardToken;
    address payable public lotCollector;
    uint256 public feeBNB; //440
    uint256 public feeEFUN; //140
    uint256 public lotRate; //10
    uint256 public bnbRate; //$0.000003 ~ 1800000000000
    uint256 public participateRate;

    IEvent public eventData;
    address public eventDataAddress;
    mapping(address => mapping(address => uint256)) private liquidityPool;

    function initialize(uint256 _participateRate, uint256 _oneHundredPrecent) public initializer {
        OwnableUpgradeable.__Ownable_init();
        ReentrancyGuardUpgradeable.__ReentrancyGuard_init();
        participateRate = _participateRate;
        oneHundredPrecent = _oneHundredPrecent;
    }

    /**
     * @dev Updates commission information
     */
    function setFeeBNB(uint256 _feeBNB) external onlyOwner {
        feeBNB = _feeBNB;
    }

    /**
     * @dev Updates commission information
     */
    function setFeeEFUN(uint256 _feeEFUN) external onlyOwner {
        feeEFUN = _feeEFUN;
    }

    /**
     * @dev Updates lotery commission information
     */
    function setFeeLot(uint256 _lotRate) external onlyOwner {
        lotRate = _lotRate;
    }

    function setBnbRate(uint256 _bnbRate) public onlyOwner {
        bnbRate = _bnbRate;
    }

    function setFeeCollector(address _feeCollector) public onlyOwner {
        feeCollector = payable(_feeCollector);
    }

    function setLotCollector(address _lotCollector) external onlyOwner {
        lotCollector = payable(_lotCollector);
    }

    function setRewardToken(address _rewardToken) public onlyOwner {
        rewardToken = payable(_rewardToken);
    }

    function setEventData(address _eventData) external onlyOwner {
        eventData = IEvent(_eventData);
        eventDataAddress = _eventData;
    }

    // more sponsor token for event
    function setSponsorTotal(
        uint256 _eventId,
        address _sToken,
        uint256 _amount
    ) public onlyOwner {
        sponsorTotal[_sToken][_eventId] = _amount;
    }

    function getSponsorTotal(uint256 eventId, address _sToken) public view returns (uint256) {
        return sponsorTotal[_sToken][eventId];
    }

    function getLiquidityPool(address _token) public view returns (uint256) {
        return liquidityPool[msg.sender][_token];
    }

    function depositLP(address _token, uint256 _amount) public payable {
        uint256 _value = msg.value;

        if (_token != address(0)) {
            _value = _amount;
            IERC20Upgradeable(_token).safeTransferFrom(msg.sender, address(this), _amount);
        }

        liquidityPool[msg.sender][_token] += _value;
    }

    /**
     * @dev Predictions
     */
    function predict(
        uint256 _eventId,
        string calldata _option,
        address _token,
        uint256 _amount
    ) public payable {
        EDataTypes.Event memory _event = eventData.info(_eventId);
        IHelper _helper = IHelper(_event.helperAddress);
        uint256 _index = indexOf(_event.options, _option);
        uint256 _predictValue = msg.value;
        if (_token != address(0)) {
            _predictValue = _amount;
        }

        require(_index != 21042104, "predict-not-in-options");
        require(_event.startTime <= block.timestamp && block.timestamp <= _event.deadlineTime, "invalid-predict-time");
        require(_event.status == EDataTypes.EventStatus.AVAILABLE, "event-not-available");
        require(predictions[_token][msg.sender][_eventId].numPredict < 1, "event-exceed-predict");
        require(
            _helper.validatePrediction(
                eventDataAddress,
                _eventId,
                predictStats[_token][_eventId].predictionAmount,
                predictOptionStats[_token][_eventId][_option],
                _predictValue,
                _event.odds[_index],
                liquidityPool[_event.creator][_token],
                oneHundredPrecent,
                _index
            ),
            "not-enough-liquidity"
        );

        if (_token != address(0)) {
            IERC20Upgradeable(_token).safeTransferFrom(msg.sender, address(this), _amount);
        }
        require(_predictValue > 0, "predict-value = 0");

        predictStats[_token][_eventId].predictOptions = "";
        predictStats[_token][_eventId].predictionAmount += _predictValue;
        predictOptionStats[_token][_eventId][_option] += _predictValue;
        predictions[_token][msg.sender][_eventId].predictOptions = _option;
        predictions[_token][msg.sender][_eventId].predictionAmount = _predictValue; // locked fund
        predictions[_token][msg.sender][_eventId].numPredict = 1;

        // send reward
        // transferToken(_token, msg.sender, _amount);

        emit PredictionCreated(_eventId, _option, _token, _predictValue);
    }

    /**
     * @dev Gets predict information
     */
    function getPredictInfo(
        uint256 eventId,
        address account,
        address token
    ) public view returns (EDataTypes.Prediction memory) {
        return predictions[token][account][eventId];
    }

    /**
     * @dev Gets event information
     */
    function getEventInfo(uint256 eventId, address token) public view returns (EDataTypes.PredictStats memory) {
        return predictStats[token][eventId];
    }

    /**
     * @dev Gets balance token
     */
    function getTokenAmount(address token) public view returns (uint256) {
        if (token == address(0)) {
            return address(this).balance;
        }
        return IERC20Upgradeable(token).balanceOf(address(this));
    }

    /**
     * @dev Claims reward
     */
    function claimReward(uint256 _eventId, address _token) external {
        EDataTypes.Event memory _event = eventData.info(_eventId);

        require(predictions[_token][msg.sender][_eventId].numPredict == 1, "not-predict");
        require(_event.status == EDataTypes.EventStatus.FINISH, "event-not-finish");
        require(predictions[_token][msg.sender][_eventId].claimed == false, "claimed");

        uint256 _index = indexOf(_event.options, predictions[_token][msg.sender][_eventId].predictOptions);
        uint256 _reward;
        uint256 _sponsorReward;
        IHelper _helper = IHelper(_event.helperAddress);

        (_reward, _sponsorReward) = _helper.calculateReward(
            eventDataAddress,
            _eventId,
            predictStats[_token][_eventId].predictionAmount,
            predictOptionStats[_token][_eventId][predictions[_token][msg.sender][_eventId].predictOptions],
            predictions[_token][msg.sender][_eventId],
            _event.odds[_index],
            oneHundredPrecent,
            _index
        );

        if (_reward > 0) {
            transferMoney(_token, msg.sender, _reward);
            predictions[_token][msg.sender][_eventId].claimed = true;

            if (_sponsorReward > 0) {
                transferMoney(_event.sToken, msg.sender, _sponsorReward);
            }
        }

        emit RewardClaimed(_eventId, _token, _reward);
    }

    function transferMoney(
        address _token,
        address _toAddress,
        uint256 _amount
    ) internal {
        uint256 _fee = 0;
        uint256 _lot = (_amount * lotRate) / oneHundredPrecent;

        // need to check balance of contract, if balance < amount, send balance
        if (_token == address(0)) {
            if (feeBNB > 0) {
                _fee = (_amount * feeBNB) / oneHundredPrecent;
            }
            if (_fee > 0) {
                payable(feeCollector).transfer(_fee);
            }
            payable(_toAddress).transfer(_amount - _fee - _lot);
            if (_lot > 0) {
                payable(lotCollector).transfer(_lot);
            }
        } else {
            if (feeEFUN > 0) {
                _fee = (_amount * feeEFUN) / oneHundredPrecent;
            }
            if (_fee > 0) {
                IERC20Upgradeable(_token).safeTransfer(feeCollector, _fee);
            }
            IERC20Upgradeable(_token).safeTransfer(_toAddress, _amount - _fee - _lot);
            if (_lot > 0) {
                IERC20Upgradeable(_token).safeTransfer(lotCollector, _lot);
            }
        }

        // send sponsor token
        // IERC20Upgradeable(_sToken).safeTransfer(_toAddress, _sponsorAmount);
    }

    function transferToken(
        address _token,
        address _toAddress,
        uint256 _amount
    ) internal {
        uint256 _participate = 0;
        uint256 _partAmount = 0;

        if (rewardToken != address(0)) {
            if (bnbRate > 0) {
                _participate = (_amount * participateRate) / oneHundredPrecent;
                _partAmount = _participate;
                // if predict = BNB
                if (_token == address(0)) {
                    _partAmount = (_participate * 10**18) / bnbRate;
                }
            }

            if (_participate > 0) {
                IERC20Upgradeable(rewardToken).safeTransfer(_toAddress, _partAmount);
            }
        }
    }

    function emergencyWithdraw(address _token, uint256 amount) public onlyOwner {
        if (_token == address(0)) {
            payable(msg.sender).transfer(address(this).balance);
        } else {
            IERC20Upgradeable(payable(_token)).safeTransfer(msg.sender, amount);
        }
    }

    function indexOf(string[] memory a, string memory b) internal pure returns (uint256) {
        for (uint256 i = 0; i < a.length; i++) {
            if (compareStrings(a[i], b)) {
                return i;
            }
        }
        return 21042104;
    }

    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    event PredictionCreated(uint256 eventId, string options, address token, uint256 amount);
    event RewardClaimed(uint256 eventId, address token, uint256 reward);
}
