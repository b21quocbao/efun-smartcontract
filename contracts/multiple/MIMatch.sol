// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;

import "./MDataTypes.sol";
pragma experimental ABIEncoderV2;

interface MIMatch {
    function info(uint256 _matchId) external view returns (MDataTypes.Match memory _match);
}
