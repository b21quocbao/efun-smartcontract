// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;

import "./GDataTypes.sol";
pragma experimental ABIEncoderV2;

interface GREvent {
    function info(uint256 _eventId) external view returns (GDataTypes.Event memory _event);
}
