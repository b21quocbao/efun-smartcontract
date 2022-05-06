// SPDX-License-Identifier: UNLICENSED
// EFUN 2022

pragma solidity =0.8.4;

library SDataTypesExt {
    enum MatchStatus {
        NOT_EXISTED,
        AVAILABLE,
        FINISH,
        CANCEL,
        SUSPEND
    }

    struct Match {
        bytes32 description;
        uint256 startTime;
        uint256 endTime;
        uint256 resultTime; // time to get result
        uint256 winOption;
        MatchStatus status;
        address sToken;
        address oToken;
        Results sResult;
    }

    struct Results {
        uint256[8] rType; // 0 ~ = (or from to), 1 ~ <, 2 ~ >, 3 string
        uint256[8] rValueFrom; // if 1, 2 use from only
        uint256[8] rValueTo; // if 1, 2 use [0], from - to
        // string[8] sValue;
    }

    struct FinalResult {
        uint256 price;
        uint256 finaltime;
    }

    struct SPredictStats {
        uint256[8] predictionAmount; // 0 : draw, 1 - first_team, 2 - second_team
    }

    struct SPrediction {
        uint256[8] predictionAmount;
        bool claimed;
    }
}
