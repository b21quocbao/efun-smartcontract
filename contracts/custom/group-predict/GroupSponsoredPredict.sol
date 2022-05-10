// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./GREvent.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

// import "@openzeppelin/contracts/utils/Strings.sol";

import "hardhat/console.sol";

contract GroupPrediction is OwnableUpgradeable, ReentrancyGuardUpgradeable {
    using SafeERC20Upgradeable for IERC20Upgradeable;
    uint256 private ONE_HUNDRED_PERCENT;

    mapping(address => mapping(address => mapping(uint256 => GDataTypes.GroupPrediction))) public predictions;
    mapping(address => mapping(uint256 => GDataTypes.GroupPredictStats)) private predictStats;
    mapping(address => mapping(uint256 => uint256)) private sponsorTotal;

    address payable public feeCollector;
    address payable public rewardToken;
    address public burnWallet;
    address payable public lotCollector;
    uint256 public feeBNB; //440
    uint256 public feeEFUN; //140
    uint256 public lotRate; //10
    uint256 public numPredict; //10
    uint256 public bnbRate; //$0.000003 ~ 1800000000000
    uint256 public participateRate;

    bool public includeSponsorTokenBack;

    GREvent public eventData;

    function initialize(
        address _burnWallet,
        uint256 _numPredict,
        uint256 _participateRate,
        uint256 _oneHundredPrecent,
        bool _includeSponsorTokenBack
    ) public initializer {
        OwnableUpgradeable.__Ownable_init();
        ReentrancyGuardUpgradeable.__ReentrancyGuard_init();
        burnWallet = _burnWallet;
        numPredict = _numPredict;
        participateRate = _participateRate;
        ONE_HUNDRED_PERCENT = _oneHundredPrecent;
        includeSponsorTokenBack = _includeSponsorTokenBack;
    }

    /**
     * @dev Updates commission information
     */
    function setFeeBNB(uint256 _feeBNB) external onlyOwner {
        feeBNB = _feeBNB;
    }

    /**
     * @dev Number of predict
     */
    function setNumPredict(uint256 _numPredict) external onlyOwner {
        numPredict = _numPredict;
    }

    /**
     * @dev set reward include sponsor token
     */
    function setRewardSponsorToken(bool _isRewardSponsorToken) external onlyOwner {
        includeSponsorTokenBack = _isRewardSponsorToken;
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
        eventData = GREvent(_eventData);
    }

    // more sponsor token for event
    function setSponsorTotal(
        uint256 _eventId,
        address _saToken,
        uint256 _amount
    ) public onlyOwner {
        sponsorTotal[_saToken][_eventId] = _amount;
    }

    function getSponsorTotal(uint256 eventId, address _saToken) public view returns (uint256) {
        return sponsorTotal[_saToken][eventId];
    }

    /**
     * @dev Predictions
     */
    function predict(
        uint256 _eventId,
        string calldata _options,
        address _token,
        uint256 _amount
    ) public payable {
        GDataTypes.Event memory _event = eventData.info(_eventId);
        require(_event.startTime <= block.timestamp && block.timestamp <= _event.endTime, "invalid-predict-time");
        require(_event.status == GDataTypes.EventStatus.AVAILABLE, "event-not-available");
        require(predictions[_token][msg.sender][_eventId].numPredict <= numPredict, "event-exceed-predict");

        // check requires balance
        //
        uint256 cNum = countString(";", _options);
        require(cNum <= numPredict, "event-exceed-predict");

        uint256 _predictValue = msg.value;
        if (_token != address(0)) {
            _predictValue = _amount;
            IERC20Upgradeable(_token).safeTransferFrom(msg.sender, address(this), _amount);
        }
        require(_predictValue > 0, "predict-value = 0");
        predictions[_token][msg.sender][_eventId].predictOptions = concatString(
            predictions[_token][msg.sender][_eventId].predictOptions,
            _options
        );
        predictStats[_token][_eventId].predictOptions = concatString(
            predictStats[_token][_eventId].predictOptions,
            _options
        );
        predictions[_token][msg.sender][_eventId].predictionAmount += _amount; // locked fund
        predictions[_token][msg.sender][_eventId].numPredict += cNum;

        // send reward
        // transferToken(_token, msg.sender, _amount);

        emit PredictionCreated(_eventId, _options, _token, _amount);
    }

    function uint2str(uint256 _i) internal pure returns (string memory str) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;

        while (j != 0) {
            length++;
            j /= 10;
        }

        bytes memory bstr = new bytes(length);
        uint256 k = length;
        j = _i;

        while (j != 0) {
            bstr[--k] = bytes1(uint8(48 + (j % 10)));
            j /= 10;
        }

        str = string(bstr);
    }

    // concat string
    function concatString(string memory _s1, string memory _s2) internal pure returns (string memory) {
        return string(abi.encodePacked(_s1, _s2));
    }

    // ===
    function countString(string memory what, string memory where) internal pure returns (uint256) {
        bytes memory whatBytes = bytes(what);
        bytes memory whereBytes = bytes(where);

        uint256 tCount = 0;

        require(whereBytes.length >= whatBytes.length);

        bool found = false;
        for (uint256 i = 0; i <= whereBytes.length - whatBytes.length; i++) {
            bool flag = true;
            for (uint256 j = 0; j < whatBytes.length; j++)
                if (whereBytes[i + j] != whatBytes[j]) {
                    flag = false;
                    break;
                }
            if (flag) {
                found = true;
                tCount++;
            }
        }
        return tCount;
    }

    function calculateTest() public view returns (uint256 _reward, uint256 _sponsorReward) {
        // GDataTypes.Event memory _event = eventData.info(_eventId);
        // string memory _result = _event.result;
        // mapping(address => string[]) storage results;

        // uint256[] memory predictionAmount;
        // 0-0;1-0;0-1;1-1
        string memory predictOptions = concatString("3-2;", "0-0;1-0;0-1;1-1;1-0;2-0;3-0;4-0;2-0;1-0");

        uint256 ct = countString("1-0", predictOptions);
        // predictionAmount('1-0') = 88800000000000000000000;
        // uint256 pa = 99900000000000000000000;
        // uint256 aa = 1000000000000000000000;
        // check balance pEFUN
        // require(pa >= aa, "EFUN: NOTENOUGHT_PEFUNTOKEN");

        console.log("predictOptions %s", predictOptions);
        console.log("_reward %s", ct);

        // console.log("_reward %s, _sponsorReward %s", _reward, _sponsorReward);
    }

    /**
     * @dev Calculates reward
     */
    function calculateReward(
        uint256 _eventId,
        address _user,
        address _token,
        address _saToken
    )
        public
        view
        returns (
            uint256 _reward,
            uint256 _totalCorrect,
            uint256 _sponsorReward
        )
    {
        GDataTypes.Event memory _event = eventData.info(_eventId);
        string memory _win = _event.result;
        _totalCorrect = countString(_win, predictStats[_token][_eventId].predictOptions);

        _reward = 0;

        // check if correct
        if (_totalCorrect > 0) {
            uint256 _userPredict = countString(_win, predictions[_token][_user][_eventId].predictOptions);

            // if correct
            if (_userPredict > 0) {
                _reward = _event.sTotal / _totalCorrect;
                _sponsorReward = sponsorTotal[_saToken][_eventId] / _totalCorrect;
            }
        }
    }

    /**
     * @dev Gets predict information
     */
    function getPredictInfo(
        uint256 eventId,
        address account,
        address token
    ) public view returns (GDataTypes.GroupPrediction memory) {
        return predictions[token][account][eventId];
    }

    /**
     * @dev Gets event information
     */
    function getEventInfo(uint256 eventId, address token) public view returns (GDataTypes.GroupPredictStats memory) {
        return predictStats[token][eventId];
    }

    /**
     * @dev Gets balance sponsor token
     */
    function getSponsorToken(uint256 eventId) public view returns (uint256) {
        GDataTypes.Event memory _event = eventData.info(eventId);
        return IERC20Upgradeable(_event.sToken).balanceOf(address(this));
    }

    /**
     * @dev Claims reward
     */
    function claimReward(
        uint256 _eventId,
        address _token,
        address _saToken
    ) external {
        GDataTypes.Event memory _event = eventData.info(_eventId);
        require(_event.status == GDataTypes.EventStatus.FINISH, "event-not-finish");
        // for testing
        // require(_event.endTime <= block.timestamp, 'end_time > timestamp');
        require(predictions[_token][msg.sender][_eventId].claimed == false, "claimed");
        uint256 _reward;
        uint256 _totalCorrect;
        uint256 _sponsorReward;

        (_reward, _totalCorrect, _sponsorReward) = calculateReward(_eventId, msg.sender, _token, _saToken);

        if (_reward > 0) {
            transferMoney(_event.sToken, msg.sender, _reward);
            predictions[_token][msg.sender][_eventId].claimed = true;

            if (_sponsorReward > 0) {
                transferMoney(_saToken, msg.sender, _sponsorReward);
            }
        }

        // back locked fund
        IERC20Upgradeable(_token).safeTransfer(msg.sender, predictions[_token][msg.sender][_eventId].predictionAmount);

        emit RewardClaimed(_eventId, _token, _reward);
    }

    function transferMoney(
        address _token,
        address _toAddress,
        uint256 _amount
    ) internal {
        uint256 _fee = 0;
        uint256 _lot = (_amount * lotRate) / ONE_HUNDRED_PERCENT;

        // need to check balance of contract, if balance < amount, send balance
        if (_token == address(0)) {
            if (feeBNB > 0) {
                _fee = (_amount * feeBNB) / ONE_HUNDRED_PERCENT;
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
                _fee = (_amount * feeEFUN) / ONE_HUNDRED_PERCENT;
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
                _participate = (_amount * participateRate) / ONE_HUNDRED_PERCENT;
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

    event PredictionCreated(uint256 eventId, string options, address token, uint256 amount);
    event RewardClaimed(uint256 eventId, address token, uint256 reward);
}
