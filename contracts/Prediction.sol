// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./IEvent.sol";
import "./IHelper.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

// import "@openzeppelin/contracts/utils/Strings.sol";

import "hardhat/console.sol";

contract Prediction is OwnableUpgradeable, ReentrancyGuardUpgradeable {
    using SafeERC20Upgradeable for IERC20Upgradeable;

    mapping(address => mapping(address => mapping(uint256 => mapping(uint256 => EDataTypes.Prediction))))
        public predictions;
    mapping(address => mapping(address => mapping(uint256 => uint256))) public numPredicts;
    mapping(address => mapping(uint256 => uint256)) public predictStats;
    mapping(address => mapping(uint256 => uint256[])) public predictOptionStats;
    mapping(address => mapping(uint256 => uint256)) private sponsorTotal;

    uint256 private oneHundredPrecent;
    address payable public feeCollector;
    address payable public rewardToken; // remove in future
    address payable public lotCollector; // remove in future
    uint256 public feeBNB; // remove in future
    uint256 public feeEFUN; // remove in future
    uint256 public lotRate; // remove in future
    uint256 public bnbRate; // remove in future
    uint256 public participateRate; // remove in future

    IEvent public eventData;
    address public eventDataAddress;
    mapping(address => mapping(address => uint256)) private liquidityPool;
    mapping(uint256 => mapping(address => uint256)) private liquidityPoolEvent;
    mapping(uint256 => mapping(address => bool)) private claimedLiquidityPool;
    address payable public efunToken;

    function initialize(uint256 _participateRate, uint256 _oneHundredPrecent) public initializer {
        OwnableUpgradeable.__Ownable_init();
        ReentrancyGuardUpgradeable.__ReentrancyGuard_init();
        oneHundredPrecent = _oneHundredPrecent;
    }

    function createSingleEvent(
        uint256[3] memory _times,
        address _helperAddress,
        uint256[] calldata _odds,
        string memory _datas,
        address[] calldata _tokens,
        uint256[] calldata _amounts,
        uint256 _pro,
        bool _affiliate,
        uint256 _hostFee
    ) external payable returns (uint256 _idx) {
        uint256 len = _odds.length;

        _idx = _createEvent(_times, _helperAddress, msg.sender, _odds, _datas, _pro, _affiliate, _hostFee);
        EDataTypes.Event memory _event = eventData.info(_idx);
        _deposit(msg.value, _idx, _tokens, _amounts, len);
    }

    function setFeeCollector(address _feeCollector) public onlyOwner {
        feeCollector = payable(_feeCollector);
    }

    function setEventData(address _eventData) external onlyOwner {
        eventData = IEvent(_eventData);
        eventDataAddress = _eventData;
    }

    function setEfunToken(address _efunToken) public onlyOwner {
        efunToken = payable(_efunToken);
    }

    function getLiquidityPool(uint256 _eventId, address _token) public view returns (uint256) {
        EDataTypes.Event memory _event = eventData.info(_eventId);
        if (_event.affiliate) {
            return liquidityPoolEvent[0][_token];
        }
        return liquidityPoolEvent[_eventId][_token];
    }

    /**
     * @dev Get remaining lp
     */
    function getRemainingLP(uint256 _eventId, address[] calldata _tokens) public view returns (uint256[] memory) {
        uint256[] memory _results = new uint256[](_tokens.length);

        for (uint256 i = 0; i < _tokens.length; ++i) {
            address _token = _tokens[i];
            (
                EDataTypes.Event memory _event,
                IHelper _helper,
                uint256 _liquidityPool,
                uint256[] memory _predictOptionStat,
                uint256 _predictStat
            ) = _getPRInfo(_eventId, _token);

            if (
                _event.endTime != 0 &&
                _event.endTime + 172800 < block.timestamp &&
                _event.status != EDataTypes.EventStatus.FINISH
            ) {
                _results[i] = _liquidityPool;
            } else if (_event.isBlock) {
                _results[i] = _liquidityPool;
            } else {
                _results[i] = _helper.calculateRemainLP(
                    eventDataAddress,
                    _eventId,
                    _predictStat,
                    _predictOptionStat,
                    _event.odds,
                    oneHundredPrecent,
                    _liquidityPool
                );
            }
        }
        return _results;
    }

    function getMaxPayout(
        uint256 _eventId,
        address _token,
        uint256 _index
    ) public view returns (uint256) {
        (
            EDataTypes.Event memory _event,
            IHelper _helper,
            uint256 _liquidityPool,
            uint256[] memory _predictOptionStat,
            uint256 _predictStat
        ) = _getPRInfo(_eventId, _token);
        return
            _helper.maxPayout(
                eventDataAddress,
                _eventId,
                _predictStat,
                _predictOptionStat,
                _event.odds[_index],
                _liquidityPool,
                oneHundredPrecent,
                _index
            );
    }

    function getPotentialReward(
        uint256 _eventId,
        address _token,
        uint256 _index,
        uint256 _amount
    ) public view returns (uint256) {
        (
            EDataTypes.Event memory _event,
            IHelper _helper,
            uint256 _liquidityPool,
            uint256[] memory _predictOptionStat, // uint256 _predictStat

        ) = _getPRInfo(_eventId, _token);

        return
            _helper.calculatePotentialReward(
                eventDataAddress,
                _eventId,
                predictStats[_token][_eventId],
                _predictOptionStat,
                _amount,
                _event.odds[_index],
                oneHundredPrecent,
                _index,
                _liquidityPool
            );
    }

    function calculateSponsor(
        uint256 _eventId,
        address _token,
        uint256 _index,
        uint256 _amount
    ) public view returns (uint256) {
        (
            EDataTypes.Event memory _event,
            IHelper _helper,
            uint256 _liquidityPool,
            uint256[] memory _predictOptionStat, // uint256 _predictStat

        ) = _getPRInfo(_eventId, _token);

        return
            _helper.calculateSponsor(
                eventDataAddress,
                _eventId,
                predictStats[_token][_eventId],
                _predictOptionStat,
                _amount,
                _event.odds[_index],
                oneHundredPrecent,
                _index,
                _liquidityPool
            );
    }

    function depositLP(
        uint256 _eventId,
        address[] calldata _tokens,
        uint256[] calldata _amounts
    ) public payable {
        EDataTypes.Event memory _event = eventData.info(_eventId);
        uint256 _totalAmount = msg.value;
        _deposit(_totalAmount, _eventId, _tokens, _amounts, _event.odds.length);
    }

    /**
     * @dev Predictions
     */
    function predict(
        uint256 _eventId,
        uint256[] calldata _optionIndexs,
        address[] calldata _tokens,
        uint256[] calldata _amounts
    ) public payable {
        uint256 _totalAmount = msg.value;
        uint256 eventId = _eventId;

        require(_tokens.length == _amounts.length && _tokens.length == _optionIndexs.length, "not-match-length");

        for (uint256 i = 0; i < _tokens.length; ++i) {
            address _token = _tokens[i];
            uint256 _amount = _amounts[i];
            uint256 _index = _optionIndexs[i];
            (EDataTypes.Event memory _event, IHelper _helper, uint256 _liquidityPool, , ) = _getPRInfo(eventId, _token);
            if (_token == address(0)) {
                require(_totalAmount >= _amount, "total-amount-not-same");
                _totalAmount -= _amount;
            }
            if (predictOptionStats[_token][eventId].length == 0) {
                predictOptionStats[_token][eventId] = new uint256[](_event.odds.length);
            }

            require(_index < _event.odds.length, "cannot-find-index");
            require(_amount > 0, "predict-value = 0");
            require(
                _event.startTime <= block.timestamp && block.timestamp <= _event.deadlineTime,
                "invalid-predict-time"
            );
            require(_event.status == EDataTypes.EventStatus.AVAILABLE, "event-not-available");
            require(
                _helper.validatePrediction(
                    eventDataAddress,
                    eventId,
                    predictStats[_token][eventId],
                    predictOptionStats[_token][eventId],
                    _amount,
                    _event.odds[_index],
                    _liquidityPool,
                    oneHundredPrecent,
                    _index
                ),
                "not-enough-liquidity"
            );

            if (_token != address(0)) {
                IERC20Upgradeable(_token).safeTransferFrom(msg.sender, address(this), _amount);
            }

            uint256 _userNumPredict = numPredicts[_token][msg.sender][eventId];
            predictStats[_token][eventId] += _amount;
            predictOptionStats[_token][eventId][_index] += _amount;
            predictions[_token][msg.sender][eventId][_userNumPredict].predictOptions = _index;
            predictions[_token][msg.sender][eventId][_userNumPredict].predictionAmount = _amount; // locked fund
            ++numPredicts[_token][msg.sender][eventId];

            emit PredictionCreated(eventId, _userNumPredict, msg.sender, _index, _token, _amount);
        }
    }

    /**
     * @dev Gets predict information
     */
    function getPredictInfo(
        uint256 eventId,
        address account,
        address token,
        uint256 index
    ) public view returns (EDataTypes.Prediction memory) {
        return predictions[token][account][eventId][index];
    }

    /**
     * @dev Gets event information
     */
    function getEventInfo(uint256 eventId, address token) public view returns (uint256) {
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
    function claimReward(
        uint256 _eventId,
        address _token,
        uint256 _predictNum
    ) external {
        EDataTypes.Event memory _event = eventData.info(_eventId);

        require(_event.status == EDataTypes.EventStatus.FINISH, "event-not-finish");
        require(predictions[_token][msg.sender][_eventId][_predictNum].claimed == false, "claimed");
        require(_event.claimTime < block.timestamp, "claim_time < timestamp");
        require(!_event.isBlock, "event blocked");

        uint256 _reward;
        _reward = estimateReward(_eventId, msg.sender, _token, _predictNum, true);

        if (_reward > 0) {
            (uint256 hostFee, uint256 platformFee) = getFee(_eventId);
            uint256 _amountHasFee = getAmountHasFee(
                _eventId,
                predictions[_token][msg.sender][_eventId][_predictNum].predictionAmount,
                _reward
            );
            transferMoney(_token, msg.sender, _amountHasFee, _reward, hostFee, platformFee, _event.creator);
            predictions[_token][msg.sender][_eventId][_predictNum].claimed = true;
        }

        emit RewardClaimed(_eventId, _predictNum, msg.sender, _token, _reward);
    }

    /**
     * @dev Estimate reward Sponsor
     */
    function estimateReward(
        uint256 _eventId,
        address _user,
        address _token,
        uint256 _predictNum,
        bool _validate
    ) public view returns (uint256) {
        (
            uint256 _predictStat,
            uint256[] memory _predictOptionStat,
            EDataTypes.Prediction memory _prediction,
            uint256 _liquidityPool,
            bool _val
        ) = _getStat(_eventId, _user, _token, _predictNum, _validate);

        EDataTypes.Event memory _event = eventData.info(_eventId);
        IHelper _helper = IHelper(_event.helperAddress);
        return
            _helper.calculateReward(
                eventDataAddress,
                _eventId,
                _predictStat,
                _predictOptionStat,
                _prediction,
                oneHundredPrecent,
                _liquidityPool,
                _val
            );
    }

    /**
     * @dev Estimate reward Sponsor
     */
    function getFee(uint256 _eventId) public view returns (uint256 hostFee, uint256 platformFee) {
        EDataTypes.Event memory _event = eventData.info(_eventId);
        IHelper _helper = IHelper(_event.helperAddress);
        hostFee = _helper.hostFee(eventDataAddress, _eventId);
        platformFee = _helper.platformFee();
        if (_event.affiliate) {
            hostFee = 0;
            platformFee = 0;
        }
    }

    /**
     * @dev Estimate reward Sponsor
     */
    function getAmountHasFee(
        uint256 _eventId,
        uint256 _amount,
        uint256 _reward
    ) public view returns (uint256 amountHasFee) {
        EDataTypes.Event memory _event = eventData.info(_eventId);
        IHelper _helper = IHelper(_event.helperAddress);
        amountHasFee = _helper.getAmountHasFee(_amount, _reward);
        if (_event.affiliate) {
            amountHasFee = 0;
        }
    }

    /**
     * @dev Estimate reward Sponsor
     */
    function estimateRewardSponsor(
        uint256 _eventId,
        address _user,
        address _token,
        uint256 _predictNum
    ) public view returns (uint256) {
        (
            uint256 _predictStat,
            uint256[] memory _predictOptionStat,
            EDataTypes.Prediction memory _prediction,
            uint256 _liquidityPool,
            bool _val
        ) = _getStat(_eventId, _user, _token, _predictNum, true);

        EDataTypes.Event memory _event = eventData.info(_eventId);
        IHelper _helper = IHelper(_event.helperAddress);

        return
            _helper.calculateRewardSponsor(
                eventDataAddress,
                _eventId,
                _predictStat,
                _predictOptionStat,
                _prediction,
                oneHundredPrecent,
                _liquidityPool
            );
    }

    /**
     * @dev Claims remaining lp
     */
    function claimRemainingLP(uint256 _eventId, address[] calldata _tokens) public {
        EDataTypes.Event memory _event = eventData.info(_eventId);
        require(
            (_event.status == EDataTypes.EventStatus.FINISH && _event.claimTime < block.timestamp) ||
                (_event.status != EDataTypes.EventStatus.FINISH &&
                    _event.endTime != 0 &&
                    _event.endTime + 172800 < block.timestamp),
            "event-not-finish"
        );
        require(_event.creator == msg.sender, "unauthorized");
        uint256[] memory _amounts = getRemainingLP(_eventId, _tokens);

        for (uint256 i = 0; i < _tokens.length; ++i) {
            address _token = _tokens[i];
            require(claimedLiquidityPool[_eventId][_token] == false, "claimed");
            claimedLiquidityPool[_eventId][_token] = true;

            uint256 _amount = _amounts[i];
            if (_token == address(0)) {
                payable(msg.sender).transfer(_amount);
            } else {
                IERC20Upgradeable(payable(_token)).safeTransfer(msg.sender, _amount);
            }
            emit LPClaimed(_eventId, _token, _amount);
        }
    }

    /**
     * @dev Claims reward
     */
    function claimCashBack(
        uint256 _eventId,
        address _token,
        uint256 _predictNum
    ) external {
        EDataTypes.Event memory _event = eventData.info(_eventId);

        require(
            (_event.status == EDataTypes.EventStatus.FINISH && _event.claimTime < block.timestamp && _event.isBlock) ||
                (_event.status != EDataTypes.EventStatus.FINISH &&
                    _event.endTime != 0 &&
                    _event.endTime + 172800 < block.timestamp),
            "event-not-finish"
        );
        require(predictions[_token][msg.sender][_eventId][_predictNum].claimed == false, "claimed");

        transferMoneyNoFee(_token, msg.sender, predictions[_token][msg.sender][_eventId][_predictNum].predictionAmount);
        predictions[_token][msg.sender][_eventId][_predictNum].claimed = true;

        emit CashBackClaimed(_eventId, _predictNum, msg.sender, _token);
    }

    function emergencyWithdraw(address _token, uint256 amount) public onlyOwner {
        if (_token == address(0)) {
            payable(msg.sender).transfer(address(this).balance);
        } else {
            IERC20Upgradeable(payable(_token)).safeTransfer(msg.sender, amount);
        }
    }

    /* =============== INTERNAL FUNCTION ==================== */

    function _createEvent(
        uint256[3] memory _times,
        address _helperAddress,
        address _creator,
        uint256[] calldata _odds,
        string memory _datas,
        uint256 _pro,
        bool _affiliate,
        uint256 _hostFee
    ) internal returns (uint256 _idx) {
        if (!_affiliate) {
            IERC20Upgradeable(efunToken).safeTransferFrom(msg.sender, address(this), 10000 * 10**9);
        }
        _idx = eventData.createSingleEvent(_times, _helperAddress, _odds, _datas, _creator, _pro, _affiliate, _hostFee);

        emit EventCreated(
            _idx,
            _times[0],
            _times[1],
            _times[2],
            _helperAddress,
            _creator,
            _odds,
            _datas,
            _pro,
            _affiliate,
            _hostFee
        );
    }

    function _deposit(
        uint256 _totalAmount,
        uint256 _idx,
        address[] calldata _tokens,
        uint256[] calldata _amounts,
        uint256 _len
    ) internal {
        for (uint256 i = 0; i < _tokens.length; ++i) {
            address _token = _tokens[i];
            uint256 _amount = _amounts[i];

            liquidityPoolEvent[_idx][_token] += _amount;
            if (_token != address(0)) {
                IERC20Upgradeable(_token).safeTransferFrom(msg.sender, address(this), _amount);
            } else {
                require(_totalAmount >= _amount, "total-amount-not-same");
                _totalAmount -= _amount;
            }
            if (predictOptionStats[_token][_idx].length == 0) {
                predictOptionStats[_token][_idx] = new uint256[](_len);
            }

            emit LPDeposited(_idx, _token, liquidityPoolEvent[_idx][_token]);
        }
    }

    function _getPRInfo(uint256 _eventId, address _token)
        internal
        view
        returns (
            EDataTypes.Event memory _event,
            IHelper _helper,
            uint256 _liquidityPool,
            uint256[] memory _predictOptionStat,
            uint256 _predictStat
        )
    {
        _predictStat = predictStats[_token][_eventId];
        _event = eventData.info(_eventId);
        _helper = IHelper(_event.helperAddress);
        _liquidityPool = getLiquidityPool(_eventId, _token);
        _predictOptionStat = predictOptionStats[_token][_eventId];
        if (_predictOptionStat.length == 0) {
            _predictOptionStat = new uint256[](_event.odds.length);
        }
    }

    function _getStat(
        uint256 _eventId,
        address _user,
        address _token,
        uint256 _predictNum,
        bool _validate
    )
        internal
        view
        returns (
            uint256 _predictStat,
            uint256[] memory _predictOptionStat,
            EDataTypes.Prediction memory _prediction,
            uint256 _liquidityPool,
            bool _val
        )
    {
        return (
            predictStats[_token][_eventId],
            predictOptionStats[_token][_eventId],
            predictions[_token][_user][_eventId][_predictNum],
            getLiquidityPool(_eventId, _token),
            _validate
        );
    }

    function transferMoney(
        address _token,
        address _toAddress,
        uint256 _amountHasFee,
        uint256 _reward,
        uint256 _hostFee,
        uint256 _platformFee,
        address _creator
    ) internal {
        uint256 _platformAmount = (_amountHasFee * _platformFee) / oneHundredPrecent;
        uint256 _hostAmount = (_amountHasFee * _hostFee) / oneHundredPrecent;

        // need to check balance of contract, if balance < amount, send balance
        if (_token == address(0)) {
            if (_platformAmount > 0) {
                payable(feeCollector).transfer(_platformAmount);
            }
            if (_hostAmount > 0) {
                payable(_creator).transfer(_hostAmount);
            }
            payable(_toAddress).transfer(_reward - _platformAmount - _hostAmount);
        } else {
            if (_platformAmount > 0) {
                IERC20Upgradeable(_token).safeTransfer(feeCollector, _platformAmount);
            }
            if (_hostAmount > 0) {
                IERC20Upgradeable(_token).safeTransfer(_creator, _hostAmount);
            }
            IERC20Upgradeable(_token).safeTransfer(_toAddress, _reward - _platformAmount - _hostAmount);
        }
    }

    function transferMoneyNoFee(
        address _token,
        address _toAddress,
        uint256 _amount
    ) internal {
        if (_token == address(0)) {
            payable(_toAddress).transfer(_amount);
        } else {
            IERC20Upgradeable(_token).safeTransfer(_toAddress, _amount);
        }
    }

    /* =============== EVENT ==================== */

    event EventCreated(
        uint256 idx,
        uint256 startTime,
        uint256 deadlineTime,
        uint256 endTime,
        address helperAddress,
        address creator,
        uint256[] odds,
        string datas,
        uint256 pro,
        bool affiliate,
        uint256 _hostFee
    );
    event LPDeposited(uint256 eventId, address token, uint256 amount);
    event LPClaimed(uint256 eventId, address token, uint256 amount);
    event PredictionCreated(
        uint256 eventId,
        uint256 predictNum,
        address user,
        uint256 optionIndex,
        address token,
        uint256 amount
    );
    event RewardClaimed(uint256 eventId, uint256 predictNum, address user, address token, uint256 reward);
    event CashBackClaimed(uint256 eventId, uint256 predictNum, address user, address token);
}
