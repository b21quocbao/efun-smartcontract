// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../EDataTypes.sol";
import "../IEvent.sol";

// import "hardhat/console.sol";

contract OverUnder is Initializable {
    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function validatePrediction(
        address _eventDataAddress,
        uint256 _eventId,
        uint256 _predictStats,
        uint256[] calldata _predictOptionStats,
        uint256 _predictValue,
        uint256 _odd,
        uint256 _liquidityPool,
        uint256 _oneHundredPrecent,
        uint256 _index
    ) external view returns (bool) {
        uint256 predictStats;
        if (_index % 2 == 0) {
            predictStats = _predictOptionStats[_index] + _predictOptionStats[_index + 1];
        } else {
            predictStats = _predictOptionStats[_index] + _predictOptionStats[_index - 1];
        }
        uint256 liquidityPool = (_liquidityPool * 2) / _predictOptionStats.length;
        uint256 totalAmount = (predictStats + _predictValue + liquidityPool) * _oneHundredPrecent;
        uint256 winAmount = (_predictOptionStats[_index] + _predictValue) * _odd;

        return totalAmount >= winAmount;
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
        uint256 _odd,
        uint256 _oneHundredPrecent,
        uint256 _index,
        uint256 _liquidityPool
    ) public view returns (uint256 _reward) {
        EDataTypes.Event memory _event = IEvent(_eventDataAddress).info(_eventId);

        bool validate1 = _predictions.predictOptions % 2 == 0 && _predictions.predictOptions >= _event.resultIndex;
        bool validate2 = _predictions.predictOptions % 2 == 1 && _predictions.predictOptions <= _event.resultIndex;

        require(validate1 || validate2, "no-reward");

        _reward = (_predictions.predictionAmount * _odd) / _oneHundredPrecent;
    }
}
