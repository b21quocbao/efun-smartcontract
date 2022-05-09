// SPDX-License-Identifier: MIT
// EFUN 2022

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./SIMatchExt.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

// import "hardhat/console.sol";

contract SponsoredPredictionLink is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;
    uint256 private ONE_HUNDRED_PERCENT = 10000;

    mapping(address => mapping(address => mapping(uint256 => SDataTypesExt.SPrediction))) public predictions;
    mapping(address => mapping(uint256 => SDataTypesExt.SPredictStats)) private predictStats;

    address payable public feeCollector;
    address payable public rewardToken;
    address payable public lotCollector;
    uint256 public feeBNB; //440
    uint256 public feeEFUN; //140
    uint256 public lotRate; //10
    uint256 public bnbRate; //$0.000003 ~ 1800000000000
    uint256 public participateRate = 100;

    bool public includeSponsorTokenBack = false;

    SIMatchExt public matchData;
    mapping(uint256 => uint256) private sponsorTotal;
    mapping(uint256 => uint256) private rewardTotal;

    /**
     * @dev Updates commission information
     */
    function setFeeBNB(uint256 _feeBNB) external onlyOwner {
        feeBNB = _feeBNB;
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

    function setSponsorTotal(uint256 _matchId, uint256 _amount) public onlyOwner {
        sponsorTotal[_matchId] = _amount;
    }

    function setRewardTotal(uint256 _matchId, uint256 _amount) public onlyOwner {
        rewardTotal[_matchId] = _amount;
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

    function setMatchData(address _matchData) external onlyOwner {
        matchData = SIMatchExt(_matchData);
    }

    /**
     * @dev Predictions
     */
    function predict(
        uint256 _matchId,
        uint256 _option,
        address _token,
        uint256 _amount
    ) public payable {
        SDataTypesExt.Match memory _match = matchData.info(_matchId);
        require(_match.startTime <= block.timestamp && block.timestamp <= _match.endTime, "invalid-predict-time");
        require(_match.status == SDataTypesExt.MatchStatus.AVAILABLE, "match-not-available");
        require(_option < 10, "option-invalid");

        uint256 _predictValue = msg.value;
        if (_token != address(0)) {
            _predictValue = _amount;
            IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        }
        require(_predictValue > 0, "predict-value = 0");
        predictions[_token][msg.sender][_matchId].predictionAmount[_option] += _amount;
        predictStats[_token][_matchId].predictionAmount[_option] += _amount;

        // send reward
        transferToken(_token, msg.sender, _amount);

        emit PredictionCreated(_matchId, _option, _token, _amount);
    }

    /**
     * @dev Calculates reward
     */
    function calculateReward(
        uint256 _matchId,
        address _user,
        address _token
    )
        public
        view
        returns (
            uint256 _reward,
            uint256 _sponsorReward,
            uint256 _rewardReward
        )
    {
        SDataTypesExt.Match memory _match = matchData.info(_matchId);

        uint256 _winSide = _match.winOption;
        uint256 _totalPredict = predictStats[_token][_matchId].predictionAmount[_winSide];
        _reward = 0;
        _sponsorReward = 0;
        _rewardReward = 0;

        // check if no one predict
        if (_totalPredict == 0) {
            for (uint256 i = 0; i < predictions[_token][_user][_matchId].predictionAmount.length; i++) {
                _reward += predictions[_token][_user][_matchId].predictionAmount[i];
            }
        } else {
            uint256 _total = 0;
            uint256 _userPredict = predictions[_token][_user][_matchId].predictionAmount[_winSide];

            for (uint256 i = 0; i < predictStats[_token][_matchId].predictionAmount.length; i++) {
                _total += predictStats[_token][_matchId].predictionAmount[i];
            }
            _reward = (_userPredict * _total) / _totalPredict;
            // % of sponsor token
            _sponsorReward = (_reward * sponsorTotal[_matchId]) / _total;
            _rewardReward = (_reward * rewardTotal[_matchId]) / _total;
        }
    }

    /**
     * @dev Gets predict information
     */
    function getPredictInfo(
        uint256 matchId,
        address account,
        address token
    ) public view returns (SDataTypesExt.SPrediction memory) {
        return predictions[token][account][matchId];
    }

    function getSponsorTotal(uint256 matchId) public view returns (uint256) {
        return sponsorTotal[matchId];
    }

    function getRewardTotal(uint256 matchId) public view returns (uint256) {
        return rewardTotal[matchId];
    }

    /**
     * @dev Gets match information
     */
    function getMatchInfo(uint256 matchId, address token) public view returns (SDataTypesExt.SPredictStats memory) {
        return predictStats[token][matchId];
    }

    /**
     * @dev Gets balance sponsor token
     */
    function getSponsorToken(uint256 matchId) public view returns (uint256) {
        SDataTypesExt.Match memory _match = matchData.info(matchId);
        return IERC20(_match.sToken).balanceOf(address(this));
    }

    /**
     * @dev Claims reward
     */
    function claimReward(uint256 _matchId, address[] memory _tokens) external {
        SDataTypesExt.Match memory _match = matchData.info(_matchId);
        require(_match.status == SDataTypesExt.MatchStatus.FINISH, "match-not-finish");
        require(_match.endTime <= block.timestamp, "end_time > timestamp");

        uint256 _reward;
        uint256 _sponsorReward;
        uint256 _rewardAmount;

        for (uint256 i = 0; i < _tokens.length; i++) {
            if (predictions[_tokens[i]][msg.sender][_matchId].claimed == false) {
                (_reward, _sponsorReward, _rewardAmount) = calculateReward(_matchId, msg.sender, _tokens[i]);

                if (_reward > 0) {
                    transferMoney(
                        _tokens[i],
                        _match.sToken,
                        rewardToken,
                        msg.sender,
                        _reward,
                        _sponsorReward,
                        _rewardAmount
                    );
                }
                predictions[_tokens[i]][msg.sender][_matchId].claimed = true;
            }
        }

        emit RewardClaimed(_matchId, _tokens, _reward);
    }

    function transferMoney(
        address _token,
        address _sToken,
        address _rewardToken,
        address _toAddress,
        uint256 _amount,
        uint256 _sponsorAmount,
        uint256 _rewardAmount
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
                IERC20(_token).safeTransfer(feeCollector, _fee);
            }
            IERC20(_token).safeTransfer(_toAddress, _amount - _fee - _lot);
            if (_lot > 0) {
                IERC20(_token).safeTransfer(lotCollector, _lot);
            }
        }

        // send sponsor token
        IERC20(_sToken).safeTransfer(_toAddress, _sponsorAmount);

        // send _rewardAmount
        if (_rewardAmount > 0) {
            IERC20(_rewardToken).safeTransfer(_toAddress, _rewardAmount);
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
                _participate = (_amount * participateRate) / ONE_HUNDRED_PERCENT;
                _partAmount = _participate;
                // if predict = BNB
                if (_token == address(0)) {
                    _partAmount = (_participate * 10**18) / bnbRate;
                }
            }

            if (_participate > 0) {
                IERC20(rewardToken).safeTransfer(_toAddress, _partAmount);
            }
        }
    }

    function emergencyWithdraw(address _token, uint256 amount) public onlyOwner {
        if (_token == address(0)) {
            payable(msg.sender).transfer(address(this).balance);
        } else {
            IERC20(payable(_token)).safeTransfer(msg.sender, amount);
        }
    }

    event PredictionCreated(uint256 matchId, uint256 option, address token, uint256 amount);
    event RewardClaimed(uint256 matchId, address[] tokens, uint256 reward);
}
