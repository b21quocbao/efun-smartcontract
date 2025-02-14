// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../EDataTypes.sol";
import "../IEvent.sol";

// import "hardhat/console.sol";

contract HandicapGroupPredict is Initializable {
    function hostFee(address _eventDataAddress, uint256 _eventId) external view returns (uint256) {
        EDataTypes.Event memory _event = IEvent(_eventDataAddress).info(_eventId);
        return _event.hostFee;
    }

    function platformFee() external view returns (uint256) {
        return 100;
    }

    function platFormfeeBefore() external view returns (uint256) {
        return 0;
    }

    function getAmountHasFee(uint256 _amount, uint256 _reward) external view returns (uint256) {
        if (_reward < _amount) return 0;
        return _reward - _amount;
    }

    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function maxPayout(
        address _eventDataAddress,
        uint256 _eventId,
        uint256 _predictStats,
        uint256[] calldata _predictOptionStats,
        uint256 _odd,
        uint256 _liquidityPool,
        uint256 _oneHundredPrecent,
        uint256 _index
    ) external view returns (uint256) {
        return 0;
    }

    function validatePrediction(
        uint256 _predictStats,
        uint256[] calldata _predictOptionStats,
        uint256 _predictValue,
        uint256 _odd,
        uint256 _liquidityPool,
        uint256 _oneHundredPrecent,
        uint256 _index
    ) external view returns (bool) {
        return true;
    }

    /**
     * @dev Calculates reward
     */
    function calculateReward(
        address _eventDataAddress,
        uint256 _eventId,
        uint256 _predictStats,
        uint256[] calldata _predictOptionStats,
        EDataTypes.Prediction calldata _predictions,
        uint256 _oneHundredPrecent,
        uint256 _liquidityPool,
        bool _validate
    ) public view returns (uint256 _reward) {
        EDataTypes.Event memory _event = IEvent(_eventDataAddress).info(_eventId);
        uint256 _index = _predictions.predictOptions;
        uint256 _odd = _event.odds[_index];

        if (_validate) {
            if (_event.resultIndex == 4 || _event.resultIndex == 3) {
                if (_predictOptionStats[4] == 0) {
                    return _predictions.predictionAmount;
                }
            }

            if (_event.resultIndex == 0 || _event.resultIndex == 1) {
                if (_predictOptionStats[0] == 0) {
                    return _predictions.predictionAmount;
                }
            }
            require((_index == 0 && _event.resultIndex != 4) || (_index == 4 && _event.resultIndex != 0), "no-reward");
        } else {
            return ((_predictStats + _liquidityPool) * _predictions.predictionAmount) / _predictOptionStats[_index];
        }

        if ((_index == 0 && _event.resultIndex == 0) || (_index == 4 && _event.resultIndex == 4)) {
            _reward = ((_predictStats + _liquidityPool) * _predictions.predictionAmount) / _predictOptionStats[_index];
        }
        if ((_index == 0 && _event.resultIndex == 1) || (_index == 4 && _event.resultIndex == 3)) {
            _reward =
                (((_predictOptionStats[_index] + _predictStats) / 2 + _liquidityPool) * _predictions.predictionAmount) /
                _predictOptionStats[_index];
        }
        if ((_index == 0 && _event.resultIndex == 2) || (_index == 4 && _event.resultIndex == 2)) {
            _reward = _predictions.predictionAmount;
        }
        if ((_index == 0 && _event.resultIndex == 3) || (_index == 4 && _event.resultIndex == 1)) {
            _reward = _predictions.predictionAmount / 2;
        }
    }

    /**
     * @dev Calculates reward
     */
    function calculateRewardSponsor(
        address _eventDataAddress,
        uint256 _eventId,
        uint256 _predictStats,
        uint256[] calldata _predictOptionStats,
        EDataTypes.Prediction calldata _predictions,
        uint256 _oneHundredPrecent,
        uint256 _liquidityPool
    ) public view returns (uint256 _reward) {
        EDataTypes.Event memory _event = IEvent(_eventDataAddress).info(_eventId);
        uint256 _index = _predictions.predictOptions;
        uint256 _odd = _event.odds[_index];

        if (_event.status == EDataTypes.EventStatus.FINISH) {
            if (_event.resultIndex == 4 || _event.resultIndex == 3) {
                if (_predictOptionStats[4] == 0) {
                    return 0;
                }
            }

            if (_event.resultIndex == 0 || _event.resultIndex == 1) {
                if (_predictOptionStats[0] == 0) {
                    return 0;
                }
            }
        }

        _reward = (_liquidityPool * _predictions.predictionAmount) / _predictOptionStats[_index];
    }

    /**
     * @dev Calculates sponsor
     */
    function calculateSponsor(
        address _eventDataAddress,
        uint256 _eventId,
        uint256 _predictStats,
        uint256[] calldata _predictOptionStats,
        uint256 _predictionAmount,
        uint256 _odd,
        uint256 _oneHundredPrecent,
        uint256 _index,
        uint256 _liquidityPool
    ) public view returns (uint256 _reward) {
        _reward = (_liquidityPool * _predictionAmount) / (_predictOptionStats[_index] + _predictionAmount);
    }

    /**
     * @dev Calculates reward
     */
    function calculatePotentialReward(
        address _eventDataAddress,
        uint256 _eventId,
        uint256 _predictStats,
        uint256[] calldata _predictOptionStats,
        uint256 _predictionAmount,
        uint256 _odd,
        uint256 _oneHundredPrecent,
        uint256 _index,
        uint256 _liquidityPool
    ) public view returns (uint256 _reward) {
        _reward =
            ((_predictStats + _liquidityPool + _predictionAmount) * _predictionAmount) /
            (_predictOptionStats[_index] + _predictionAmount);
    }

    /**
     * @dev Calculates reward
     */
    function calculateRemainLP(
        address _eventDataAddress,
        uint256 _eventId,
        uint256 _predictStats,
        uint256[] calldata _predictOptionStats,
        uint256[] calldata _odds,
        uint256 _oneHundredPrecent,
        uint256 _liquidityPool
    ) public view returns (uint256 _remainLP) {
        EDataTypes.Event memory _event = IEvent(_eventDataAddress).info(_eventId);
        bool cont1 = (_event.resultIndex == 0 || _event.resultIndex == 1) && _predictOptionStats[0] == 0;
        bool cont2 = (_event.resultIndex == 4 || _event.resultIndex == 3) && _predictOptionStats[4] == 0;
        bool cont3 = _event.resultIndex == 2;

        if (cont1 || cont2 || cont3) {
            _remainLP = _liquidityPool;
        } else {
            _remainLP = 0;
        }
    }
}
