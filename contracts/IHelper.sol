// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;

import "./HDataTypes.sol";
import "./EDataTypes.sol";
pragma experimental ABIEncoderV2;

interface IHelper {
    function maxPayout(
        address _eventDataAddress,
        uint256 _eventId,
        uint256 _predictStats,
        uint256[] calldata _predictOptionStats,
        uint256 _odd,
        uint256 _liquidityPool,
        uint256 _oneHundredPrecent,
        uint256 _index
    ) external view returns (uint256);

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
    ) external view returns (bool);

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
    ) external view returns (uint256 _reward);

    function calculateRemainLP(
        address _eventDataAddress,
        uint256 _eventId,
        uint256 _predictStats,
        uint256[] calldata _predictOptionStats,
        uint256[] calldata _odds,
        uint256 _oneHundredPrecent,
        uint256 _liquidityPool
    ) external view returns (uint256 _remainLP);
}
