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
    mapping(uint256 => mapping(address => uint256)) private liquidityPoolEvent;
    mapping(uint256 => mapping(address => bool)) private claimedLiquidityPool;

    function initialize(uint256 _participateRate, uint256 _oneHundredPrecent) public initializer {
        OwnableUpgradeable.__Ownable_init();
        ReentrancyGuardUpgradeable.__ReentrancyGuard_init();
        participateRate = _participateRate;
        oneHundredPrecent = _oneHundredPrecent;
    }

    function createSingleEvent(
        uint256 _startTime,
        uint256 _deadlineTime,
        uint256 _endTime,
        address _helperAddress,
        uint256[] calldata _odds,
        string memory _datas,
        address[] calldata _tokens,
        uint256[] calldata _amounts,
        uint256 _pro
    ) external payable returns (uint256 _idx) {
        uint256 len = _odds.length;

        _idx = _createEvent(_startTime, _deadlineTime, _endTime, _helperAddress, msg.sender, _odds, _datas, _pro);
        EDataTypes.Event memory _event = eventData.info(_idx);
        _deposit(msg.value, _idx, _tokens, _amounts, len);
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

    function getLiquidityPool(uint256 _eventId, address _token) public view returns (uint256) {
        return liquidityPoolEvent[_eventId][_token];
    }

    /**
     * @dev Get remaining lp
     */
    function getRemainingLP(uint256 _eventId, address[] calldata _tokens) public view returns (uint256[] memory) {
        EDataTypes.Event memory _event = eventData.info(_eventId);
        IHelper _helper = IHelper(_event.helperAddress);
        uint256[] memory _results = new uint256[](_tokens.length);

        for (uint256 i = 0; i < _tokens.length; ++i) {
            address _token = _tokens[i];
            (uint256 _predictStat, uint256[] memory _predictOptionStat, uint256 _liquidityPool) = _getEventStat(
                _eventId,
                _token
            );
            if (_event.endTime + 172800 < block.timestamp && _event.status != EDataTypes.EventStatus.FINISH) {
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
        EDataTypes.Event memory _event = eventData.info(_eventId);
        IHelper _helper = IHelper(_event.helperAddress);
        uint256[] memory predictOptionStat = predictOptionStats[_token][_eventId];
        if (predictOptionStats[_token][_eventId].length == 0) {
            predictOptionStat = new uint256[](_event.odds.length);
        }
        return
            _helper.maxPayout(
                eventDataAddress,
                _eventId,
                predictStats[_token][_eventId],
                predictOptionStat,
                _event.odds[_index],
                liquidityPoolEvent[_eventId][_token],
                oneHundredPrecent,
                _index
            );
    }

    function getPRInfo(
        uint256 _eventId,
        address _token,
        uint256 _index,
        uint256 _amount
    )
        internal
        view
        returns (
            EDataTypes.Event memory _event,
            IHelper _helper,
            uint256 _liquidityPool,
            uint256[] memory _predictOptionStat
        )
    {
        _event = eventData.info(_eventId);
        _helper = IHelper(_event.helperAddress);
        _liquidityPool = liquidityPoolEvent[_eventId][_token];
        _predictOptionStat = predictOptionStats[_token][_eventId];
        if (_predictOptionStat.length == 0) {
            _predictOptionStat = new uint256[](_event.odds.length);
        }
    }

    function getPotentialReward(
        uint256 _eventId,
        address _token,
        uint256 _index,
        uint256 _amount
    ) public view returns (uint256) {
        uint256 eventId = _eventId;
        address token = _token;
        uint256 index = _index;
        uint256 amount = _amount;
        (
            EDataTypes.Event memory _event,
            IHelper _helper,
            uint256 _liquidityPool,
            uint256[] memory _predictOptionStat
        ) = getPRInfo(eventId, token, index, amount);

        return
            _helper.calculatePotentialReward(
                eventDataAddress,
                eventId,
                predictStats[token][eventId],
                _predictOptionStat,
                amount,
                _event.odds[index],
                oneHundredPrecent,
                index,
                _liquidityPool
            ) - amount;
    }

    function calculateSponsor(
        uint256 _eventId,
        address _token,
        uint256 _index,
        uint256 _amount
    ) public view returns (uint256) {
        uint256 eventId = _eventId;
        address token = _token;
        uint256 index = _index;
        uint256 amount = _amount;
        (
            EDataTypes.Event memory _event,
            IHelper _helper,
            uint256 _liquidityPool,
            uint256[] memory _predictOptionStat
        ) = getPRInfo(eventId, token, index, amount);

        return
            _helper.calculateSponsor(
                eventDataAddress,
                eventId,
                predictStats[token][eventId],
                _predictOptionStat,
                amount,
                _event.odds[index],
                oneHundredPrecent,
                index,
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

        for (uint256 i = 0; i < _tokens.length; ++i) {
            address _token = _tokens[i];
            uint256 _amount = _amounts[i];

            liquidityPoolEvent[_eventId][_token] += _amount;
            if (_token != address(0)) {
                IERC20Upgradeable(_token).safeTransferFrom(msg.sender, address(this), _amount);
            } else {
                require(_totalAmount >= _amount, "total-amount-not-same");
                _totalAmount -= _amount;
            }
            if (predictOptionStats[_token][_eventId].length == 0) {
                predictOptionStats[_token][_eventId] = new uint256[](_event.odds.length);
            }

            emit LPDeposited(_eventId, _token, liquidityPoolEvent[_eventId][_token]);
        }
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
        EDataTypes.Event memory _event = eventData.info(_eventId);
        IHelper _helper = IHelper(_event.helperAddress);
        uint256 _totalAmount = msg.value;
        uint256 _localEventId = _eventId;

        require(_tokens.length == _amounts.length && _tokens.length == _optionIndexs.length, "not-match-length");

        for (uint256 i = 0; i < _tokens.length; ++i) {
            address _token = _tokens[i];
            uint256 _amount = _amounts[i];
            uint256 _index = _optionIndexs[i];
            if (_token == address(0)) {
                require(_totalAmount >= _amount, "total-amount-not-same");
                _totalAmount -= _amount;
            }
            if (predictOptionStats[_token][_localEventId].length == 0) {
                predictOptionStats[_token][_localEventId] = new uint256[](_event.odds.length);
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
                    _localEventId,
                    predictStats[_token][_localEventId],
                    predictOptionStats[_token][_localEventId],
                    _amount,
                    _event.odds[_index],
                    liquidityPoolEvent[_localEventId][_token],
                    oneHundredPrecent,
                    _index
                ),
                "not-enough-liquidity"
            );

            if (_token != address(0)) {
                IERC20Upgradeable(_token).safeTransferFrom(msg.sender, address(this), _amount);
            }

            uint256 _userNumPredict = numPredicts[_token][msg.sender][_localEventId];
            predictStats[_token][_localEventId] += _amount;
            predictOptionStats[_token][_localEventId][_index] += _amount;
            predictions[_token][msg.sender][_localEventId][_userNumPredict].predictOptions = _index;
            predictions[_token][msg.sender][_localEventId][_userNumPredict].predictionAmount = _amount; // locked fund
            ++numPredicts[_token][msg.sender][_localEventId];

            emit PredictionCreated(_localEventId, _userNumPredict, msg.sender, _index, _token, _amount);
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

        uint256 _index = predictions[_token][msg.sender][_eventId][_predictNum].predictOptions;
        uint256 _reward;
        uint256 _liquidityPool = liquidityPoolEvent[_eventId][_token];

        IHelper _helper = IHelper(_event.helperAddress);

        _reward = estimateReward(_eventId, msg.sender, _token, _predictNum, true);

        if (_reward > 0) {
            transferMoney(_token, msg.sender, _reward);
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
        IHelper _helper = IHelper(_event.helperAddress);

        require(
            (_event.status == EDataTypes.EventStatus.FINISH && _event.claimTime < block.timestamp) ||
                (_event.status != EDataTypes.EventStatus.FINISH && _event.endTime + 172800 < block.timestamp),
            "event-not-finish"
        );
        require(_event.creator == msg.sender, "unauthorized");
        uint256[] memory _amounts = getRemainingLP(_eventId, _tokens);

        for (uint256 i = 0; i < _tokens.length; ++i) {
            address _token = _tokens[i];
            uint256 _liquidityPool = liquidityPoolEvent[_eventId][_token];
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
                (_event.status != EDataTypes.EventStatus.FINISH && _event.endTime + 172800 < block.timestamp),
            "event-not-finish"
        );
        require(predictions[_token][msg.sender][_eventId][_predictNum].claimed == false, "claimed");

        transferMoney(_token, msg.sender, predictions[_token][msg.sender][_eventId][_predictNum].predictionAmount);
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
        uint256 _startTime,
        uint256 _deadlineTime,
        uint256 _endTime,
        address _helperAddress,
        address _creator,
        uint256[] calldata _odds,
        string memory _datas,
        uint256 _pro
    ) internal returns (uint256 _idx) {
        _idx = eventData.createSingleEvent(
            _startTime,
            _deadlineTime,
            _endTime,
            _helperAddress,
            _odds,
            _datas,
            _creator,
            _pro
        );

        emit EventCreated(_idx, _startTime, _deadlineTime, _endTime, _helperAddress, _creator, _odds, _datas, _pro);
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

    function _getEventStat(uint256 _eventId, address _token)
        internal
        view
        returns (
            uint256 _predictStat,
            uint256[] memory _predictOptionStat,
            uint256 _liquidityPool
        )
    {
        return (
            predictStats[_token][_eventId],
            predictOptionStats[_token][_eventId],
            liquidityPoolEvent[_eventId][_token]
        );
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
            liquidityPoolEvent[_eventId][_token],
            _validate
        );
    }

    event EventCreated(
        uint256 idx,
        uint256 startTime,
        uint256 deadlineTime,
        uint256 endTime,
        address helperAddress,
        address creator,
        uint256[] odds,
        string datas,
        uint256 pro
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
