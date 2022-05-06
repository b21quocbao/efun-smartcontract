// SPDX-License-Identifier: UNLICENSED
// EFUN 2022

pragma solidity =0.8.4;

import "./SDataTypesExt.sol";
pragma experimental ABIEncoderV2;

interface SIMatchExt {
    function info(uint256 _matchId)
        external
        view
        returns (SDataTypesExt.Match memory _match);
}
