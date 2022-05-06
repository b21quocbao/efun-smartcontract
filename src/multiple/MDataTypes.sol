// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;

library MDataTypes {
    enum MatchStatus {NOT_EXISTED, AVAILABLE, FINISH, CANCEL, SUSPEND}
    enum HandicapPredictionStatus {ENABLE, DISABLE}
    
    struct Score {
        uint256 firstTeam;
        uint256 secondTeam;
    }
    
    struct Match {
        bytes32 description;
        uint256 startTime;
        uint256 endTime;
        Score score;
        MatchStatus status;
        address sToken;
        uint256 sTotal;
    }

    struct Handicap{
        uint256 side;
        uint256 value;
    }
    
    struct HandicapPrediction {
        address dealer;
        address token;
        uint256 matchId;
        uint256 minPredict;
        uint256 hardCap;
        Handicap handicap;
        uint256 chosenTeam;
        uint256 totalUserDeposit;
        HandicapPredictionStatus status;
    }

    struct HandicapPredictHistory {
        uint256 predictValue;
        uint256 timeStamp;
    }

    struct HandicapPredictionStats {
        uint256 totalAmount;
        uint256 availableAmount;
    }

    struct GroupPredictStats {
       uint256[3] predictionAmount; // 0 : draw, 1 - first_team, 2 - second_team
       string predictOptions;
    }

    struct GroupPrediction {
        uint256[3] predictionAmount; // 0: locked fund
        uint256 numPredict;
        string predictOptions;
        bool claimed;
    }
}