// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../EDataTypes.sol";
import "../IEvent.sol";

// import "hardhat/console.sol";

contract GroupPredict is Initializable {
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
        uint256 _odd,
        uint256 _oneHundredPrecent,
        uint256 _index,
        uint256 _liquidityPool
    ) public view returns (uint256 _reward) {
        EDataTypes.Event memory _event = IEvent(_eventDataAddress).info(_eventId);
        require(_event.resultIndex == _predictions.predictOptions, "no-reward");

        _reward = ((_predictStats + _liquidityPool) * _predictions.predictionAmount) / _predictOptionStats[_index];
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
        _remainLP = 0;
    }
}
