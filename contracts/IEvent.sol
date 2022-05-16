// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;

import "./EDataTypes.sol";
pragma experimental ABIEncoderV2;

interface IEvent {
    function info(uint256 _eventId) external view returns (EDataTypes.Event memory _event);
}
