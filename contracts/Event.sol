// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./EDataTypes.sol";

// import "hardhat/console.sol";

contract Event is OwnableUpgradeable {
    uint256 public nEvents;

    mapping(uint256 => EDataTypes.Event) public events;

    function initialize() public initializer {
        OwnableUpgradeable.__Ownable_init();
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    function updateEventResult(uint256 _eventId, string memory _result) external {
        EDataTypes.Event storage _event = events[_eventId];

        require(indexOf(_event.options, _result) != 21042104, "result-not-in-options");
        require(_event.creator == msg.sender, "unauthorized");
        require(_event.endTime <= block.timestamp, "end_time <= timestamp");
        require(_event.endTime + 172800 >= block.timestamp, "end_time + 2 days >= timestamp");

        _event.result = _result;
        _event.status = EDataTypes.EventStatus.FINISH;

        emit EventResultUpdated(msg.sender, _eventId, _result);
    }

    function updateSToken(
        uint256 _eventId,
        address _sToken,
        uint256 _sTotal
    ) external {
        EDataTypes.Event storage _event = events[_eventId];

        require(_event.creator == msg.sender, "unauthorized");

        _event.sToken = _sToken;
        _event.sTotal = _sTotal;
    }

    /* ========== PUBLIC FUNCTIONS ========== */

    function info(uint256 _eventId) external view returns (EDataTypes.Event memory _event) {
        _event = events[_eventId];
    }

    function createSingleEvent(
        bytes32 _description,
        uint256 _startTime,
        uint256 _deadlineTime,
        uint256 _endTime,
        address _helperAddress,
        string calldata _addtionalData,
        address _sToken,
        uint256 _sTotal,
        EDataTypes.Option calldata _options
    ) external returns (uint256 _idx) {
        require(block.timestamp < _startTime, "_startTime > block.timestamp");
        require(_startTime < _deadlineTime, "deadline_time > start_time");
        require(_deadlineTime < _endTime, "end_time > deadline_time");
        require(_options.data.length == _options.odds.length, "not-match-length-option-odd");

        _idx = nEvents;
        events[_idx] = EDataTypes.Event(
            _description,
            _startTime,
            _deadlineTime,
            _endTime,
            "",
            EDataTypes.EventStatus.AVAILABLE,
            _helperAddress,
            _addtionalData,
            _sToken,
            _sTotal,
            msg.sender,
            _options.data,
            _options.odds
        );
        emit EventCreated(
            _idx,
            _description,
            _startTime,
            _deadlineTime,
            _endTime,
            _helperAddress,
            _addtionalData,
            _sToken,
            _sTotal,
            msg.sender,
            _options
        );
        nEvents++;
    }

    /* ========== INTERNAL FUNCTIONS ========== */

    function indexOf(string[] memory a, string memory b) internal pure returns (uint256) {
        for (uint256 i = 0; i < a.length; i++) {
            if (compareStrings(a[i], b)) {
                return i;
            }
        }
        return 21042104;
    }

    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    /* =============== EVENTS ==================== */

    event EventResultUpdated(address caller, uint256 eventId, string result);
    event EventStatusUpdated(address caller, uint256 eventId, EDataTypes.EventStatus status);
    event EventCreated(
        uint256 idx,
        bytes32 descriptions,
        uint256 startTime,
        uint256 deadlineTime,
        uint256 endTime,
        address helperAddress,
        string additionalData,
        address sToken,
        uint256 sTotal,
        address creator,
        EDataTypes.Option options
    );
}
