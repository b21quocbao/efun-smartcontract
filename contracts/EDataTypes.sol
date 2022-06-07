// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;

library EDataTypes {
    enum EventStatus {
        AVAILABLE,
        FINISH
    }

    struct Event {
        uint256 startTime;
        uint256 deadlineTime;
        uint256 endTime;
        uint256 resultIndex;
        string result;
        EventStatus status;
        address helperAddress;
        address creator;
        string[] options;
        uint256[] odds;
        string[12] _datas;
    }

    struct Prediction {
        uint256 predictionAmount;
        uint256 predictOptions;
        bool claimed;
    }

    struct Option {
        string[] data;
        uint256[] odds;
    }
}
