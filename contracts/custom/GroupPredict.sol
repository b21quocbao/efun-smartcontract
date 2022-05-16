// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../EDataTypes.sol";
import "../IEvent.sol";

contract GroupPredict is Initializable {
    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
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
        uint256 _odd
    ) public view returns (uint256 _reward, uint256 _sponsorReward) {
        EDataTypes.Event memory _event = IEvent(_eventDataAddress).info(_eventId);
        string memory _win = _event.result;
        require(compareStrings(_win, _predictions.predictOptions), "no-reward");

        _reward = (_predictStats * _predictions.predictionAmount) / _predictOptionStats;
        _sponsorReward = (_event.sTotal * _predictions.predictionAmount) / _predictOptionStats;
    }
}
