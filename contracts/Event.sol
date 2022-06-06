// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./EDataTypes.sol";

import "hardhat/console.sol";

contract Event is OwnableUpgradeable {
    mapping(uint256 => EDataTypes.Event) public events;

    function initialize() public initializer {
        OwnableUpgradeable.__Ownable_init();
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    function updateEventResult(uint256 _eventId, string memory _result) external {
        EDataTypes.Event storage _event = events[_eventId];
        uint256 _index = indexOf(_event.options, _result);

        require(_event.creator == msg.sender, "unauthorized");
        require(_event.endTime <= block.timestamp, "end_time <= timestamp");
        require(_event.endTime + 172800 >= block.timestamp, "end_time + 2 days >= timestamp");

        _event.result = _result;
        _event.resultIndex = _index;
        _event.status = EDataTypes.EventStatus.FINISH;

        emit EventResultUpdated(msg.sender, _eventId, _result);
    }

    /* ========== PUBLIC FUNCTIONS ========== */

    function info(uint256 _eventId) external view returns (EDataTypes.Event memory _event) {
        _event = events[_eventId];
    }

    function createSingleEvent(
        uint256 _idx,
        uint256 _startTime,
        uint256 _deadlineTime,
        uint256 _endTime,
        address _helperAddress,
        EDataTypes.Option calldata _options
    ) external {
        require(_startTime < _deadlineTime, "deadline_time > start_time");
        require(_deadlineTime < _endTime, "end_time > deadline_time");
        require(_options.data.length == _options.odds.length, "not-match-length-option-odd");
        require(events[_idx].creator == address(0), "already existed");

        events[_idx] = EDataTypes.Event(
            _startTime,
            _deadlineTime,
            _endTime,
            0,
            "",
            EDataTypes.EventStatus.AVAILABLE,
            _helperAddress,
            msg.sender,
            _options.data,
            _options.odds
        );
        emit EventCreated(_idx, _startTime, _deadlineTime, _endTime, _helperAddress, msg.sender, _options);
    }

    /* ========== INTERNAL FUNCTIONS ========== */

    function indexOf(string[] memory a, string memory b) internal pure returns (uint256) {
        for (uint256 i = 0; i < a.length; i++) {
            if (compareStrings(a[i], b)) {
                return i;
            }
        }
        require(false, "cannot-find-index");
    }

    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    /* =============== EVENTS ==================== */

    event EventResultUpdated(address caller, uint256 eventId, string result);
    event EventCreated(
        uint256 idx,
        uint256 startTime,
        uint256 deadlineTime,
        uint256 endTime,
        address helperAddress,
        address creator,
        EDataTypes.Option options
    );
}
