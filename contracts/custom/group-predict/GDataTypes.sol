// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;

library GDataTypes {
    enum EventStatus {
        NOT_EXISTED,
        AVAILABLE,
        FINISH,
        CANCEL,
        SUSPEND
    }

    struct Event {
        bytes32 description;
        uint256 startTime;
        uint256 endTime;
        string result;
        EventStatus status;
        address sToken;
        uint256 sTotal;
    }

    struct GroupPredictStats {
        uint256 predictionAmount;
        string predictOptions;
    }

    struct GroupPrediction {
        uint256 predictionAmount;
        uint256 numPredict;
        string predictOptions;
        bool claimed;
    }
}
