// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;

library EDataTypes {
    enum EventStatus {
        AVAILABLE,
        FINISH
    }

    struct Event {
        bytes32 description;
        uint256 startTime;
        uint256 deadlineTime;
        uint256 endTime;
        string result;
        EventStatus status;
        address helperAddress;
        string additionalData;
        address sToken;
        uint256 sTotal;
        address creator;
        string[] options;
        uint256[] odds;
    }

    struct PredictStats {
        uint256 predictionAmount;
        string predictOptions;
    }

    struct Prediction {
        uint256 predictionAmount;
        uint256 numPredict;
        string predictOptions;
        bool claimed;
    }

    struct Option {
        string[] data;
        uint256[] odds;
    }
}
