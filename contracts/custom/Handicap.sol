// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../EDataTypes.sol";
import "../IEvent.sol";

// import "hardhat/console.sol";

contract Handicap is Initializable {
    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function indexOf(string[] memory a, string memory b) internal pure returns (uint256) {
        for (uint256 i = 0; i < a.length; i++) {
            if (compareStrings(a[i], b)) {
                return i;
            }
        }
    }

    function validatePrediction(
        address _eventDataAddress,
        uint256 _eventId,
        uint256 _predictStats,
        uint256 _predictOptionStats,
        uint256 _predictValue,
        uint256 _odd,
        uint256 _liquidityPool,
        uint256 _oneHundredPrecent,
        uint256 _index
    ) external view returns (bool) {
        uint256 totalAmount = (_predictStats + _predictValue + _liquidityPool) * _oneHundredPrecent;
        uint256 totalAmountA = _predictOptionStats + _predictValue;
        uint256 totalAmountB = _predictStats - _predictOptionStats;

        uint256 winAmountA = totalAmountA * _odd;
        uint256 halfWinAmountA = (totalAmountA * (_odd + _oneHundredPrecent)) / 2;
        uint256 halfLoseAmountA = totalAmountA / 2;
        uint256 halfWinAmountB = (totalAmountB * (_odd + _oneHundredPrecent)) / 2;
        uint256 halfLoseAmountB = totalAmountB / 2;

        bool validate1 = totalAmount >= winAmountA;
        bool validate2 = totalAmount >= halfWinAmountA + halfLoseAmountB;
        bool validate3 = totalAmount >= halfWinAmountB + halfLoseAmountA;
        bool validate4 = (_index == 0 || _index == 4);

        return validate1 && validate2 && validate3 && validate4;
    }

    /**
     * @dev Calculates reward
     */
    function calculateReward(
        address _eventDataAddress,
        uint256 _eventId,
        uint256 _predictStats,
        uint256 _predictOptionStats,
        EDataTypes.Prediction calldata _predictions,
        uint256 _odd,
        uint256 _oneHundredPrecent,
        uint256 _index
    ) public view returns (uint256 _reward, uint256 _sponsorReward) {
        EDataTypes.Event memory _event = IEvent(_eventDataAddress).info(_eventId);
        uint256 _indexOption = indexOf(_event.options, _predictions.predictOptions);

        require((_indexOption == 0 && _index != 4) || (_indexOption == 4 && _index != 0), "no-reward");

        if ((_indexOption == 0 && _index == 0) || (_indexOption == 1 && _index == 4)) {
            _reward = (_predictions.predictionAmount * _odd) / _oneHundredPrecent;
        }
        if ((_indexOption == 0 && _index == 1) || (_indexOption == 1 && _index == 3)) {
            _reward = (_predictions.predictionAmount * (_oneHundredPrecent + _odd)) / 2 / _oneHundredPrecent;
        }
        if ((_indexOption == 0 && _index == 2) || (_indexOption == 1 && _index == 2)) {
            _reward = _predictions.predictionAmount;
        }
        if ((_indexOption == 0 && _index == 3) || (_indexOption == 1 && _index == 1)) {
            _reward = _predictions.predictionAmount / 2;
        }

        _sponsorReward = (_event.sTotal * _predictions.predictionAmount) / _predictStats;
    }
}
