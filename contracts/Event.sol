// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./EDataTypes.sol";

import "hardhat/console.sol";

contract Event is OwnableUpgradeable {
    mapping(uint256 => EDataTypes.Event) public events;
    uint256 public nEvents;

    function initialize() public initializer {
        nEvents = 0;
        OwnableUpgradeable.__Ownable_init();
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    function updateEventResult(uint256 _eventId, uint256 _index) external {
        EDataTypes.Event storage _event = events[_eventId];
        require(_index < _event.odds.length, "cannot-find-index");
        require(_event.creator == msg.sender, "unauthorized");
        require(_event.endTime <= block.timestamp, "end_time <= timestamp");
        require(_event.endTime + 172800 >= block.timestamp, "end_time + 2 days >= timestamp");

        _event.resultIndex = _index;
        _event.status = EDataTypes.EventStatus.FINISH;

        emit EventResultUpdated(msg.sender, _eventId, _index);
    }

    /* ========== PUBLIC FUNCTIONS ========== */

    function info(uint256 _eventId) external view returns (EDataTypes.Event memory _event) {
        _event = events[_eventId];
    }

    function createSingleEvent(
        uint256 _startTime,
        uint256 _deadlineTime,
        uint256 _endTime,
        address _helperAddress,
        uint256[] calldata _odds,
        string memory _datas
    ) external returns (uint256 _idx) {
        require(_startTime < _deadlineTime, "deadline_time > start_time");
        require(_deadlineTime < _endTime, "end_time > deadline_time");
        _idx = nEvents;

        events[_idx] = EDataTypes.Event(
            _startTime,
            _deadlineTime,
            _endTime,
            0,
            EDataTypes.EventStatus.AVAILABLE,
            _helperAddress,
            msg.sender,
            _odds,
            _datas
        );
        emit EventCreated(_idx, _startTime, _deadlineTime, _endTime, _helperAddress, msg.sender, _odds, _datas);
        nEvents++;
    }

    /* =============== EVENTS ==================== */

    event EventResultUpdated(address caller, uint256 eventId, uint256 index);
    event EventCreated(
        uint256 idx,
        uint256 startTime,
        uint256 deadlineTime,
        uint256 endTime,
        address helperAddress,
        address creator,
        uint256[] odds,
        string datas
    );
}
