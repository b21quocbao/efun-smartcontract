// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./GDataTypes.sol";

// import "hardhat/console.sol";

contract GroupEvent is OwnableUpgradeable {
    uint256 public nEventes;

    mapping(address => bool) admins;
    mapping(uint256 => GDataTypes.Event) public eventes;

    /* ========== MODIFIERS ========== */

    function initialize() public initializer {
        OwnableUpgradeable.__Ownable_init();
    }

    modifier onlyOwnerOrAdmin() {
        require(msg.sender == owner() || admins[msg.sender] == true, "!owner && admin");
        _;
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    function setAdminPermission(address _admin, bool _status) external onlyOwner {
        admins[_admin] = _status;
    }

    function createEventes(
        bytes32[] calldata _descriptions,
        uint256[] calldata _startTimes,
        uint256[] calldata _endTimes,
        address[] calldata _sToken,
        uint256[] calldata _sTotal
    ) external onlyOwnerOrAdmin {
        // uint256[] memory _ids = new uint256[](_descriptions.length);
        uint256 _idx;
        require(_descriptions.length == _startTimes.length && _startTimes.length == _endTimes.length, "not-same-size");
        require(_descriptions.length > 0, "size = 0");
        for (uint256 i = 0; i < _descriptions.length; i++) {
            _idx = nEventes;
            // _ids[i] = _idx;
            eventes[_idx] = GDataTypes.Event(
                _descriptions[i],
                _startTimes[i],
                _endTimes[i],
                "",
                GDataTypes.EventStatus.AVAILABLE,
                _sToken[i],
                _sTotal[i] * 10**18
            );
            emit EventCreated(_idx, _descriptions[i], _startTimes[i], _endTimes[i], _sToken[i], _sTotal[i]);
            nEventes++;
        }
        // emit EventesCreated(_ids);
    }

    function updateSToken(
        uint256[] calldata _eventIds,
        address[] calldata _sToken,
        uint256[] calldata _sTotal
    ) external onlyOwnerOrAdmin {
        require(_eventIds.length > 0, "size = 0");

        for (uint256 i = 0; i < _eventIds.length; i++) {
            GDataTypes.Event storage _event = eventes[_eventIds[i]];
            _event.sToken = _sToken[i];
            _event.sTotal = _sTotal[i];
        }
    }

    function updateEventResults(uint256[] calldata _eventIds, string[] calldata _results) external onlyOwnerOrAdmin {
        require(_eventIds.length > 0, "size = 0");
        require(_eventIds.length == _results.length, "not-same-size");

        for (uint256 i = 0; i < _eventIds.length; i++) {
            updateEventResult(_eventIds[i], _results[i]);
        }
    }

    function updateEventStatuses(uint256[] memory _eventIds, GDataTypes.EventStatus[] memory _status)
        external
        onlyOwnerOrAdmin
    {
        require(_eventIds.length > 0, "size = 0");
        require(_eventIds.length == _status.length, "not-same-size");
        for (uint256 i = 0; i < _eventIds.length; i++) {
            updateEventStatus(_eventIds[i], _status[i]);
        }
    }

    /* ========== PUBLIC FUNCTIONS ========== */

    function info(uint256 _eventId) external view returns (GDataTypes.Event memory _event) {
        _event = eventes[_eventId];
    }

    /* ========== INTERNAL FUNCTIONS ========== */

    function createSingleEvent(
        bytes32 _description,
        uint256 _startTime,
        uint256 _endTime,
        address _sToken,
        uint256 _sTotal
    ) internal returns (uint256 _idx) {
        _idx = nEventes;
        eventes[_idx] = GDataTypes.Event(
            _description,
            _startTime,
            _endTime,
            "",
            GDataTypes.EventStatus.AVAILABLE,
            _sToken,
            _sTotal
        );
        emit EventCreated(_idx, _description, _startTime, _endTime, _sToken, _sTotal);
        nEventes++;
    }

    function updateEventResult(uint256 _eventId, string memory _result) internal {
        GDataTypes.Event storage _event = eventes[_eventId];
        _event.result = _result;
        emit EventResultUpdated(msg.sender, _eventId, _result);
    }

    function updateEventStatus(uint256 _eventId, GDataTypes.EventStatus _status) internal {
        GDataTypes.Event storage _event = eventes[_eventId];
        _event.status = _status;
        emit EventStatusUpdated(msg.sender, _eventId, _status);
    }

    /* =============== EVENTS ==================== */

    event EventResultUpdated(address caller, uint256 eventId, string result);
    event EventStatusUpdated(address caller, uint256 eventId, GDataTypes.EventStatus status);
    event EventCreated(
        uint256 idx,
        bytes32 descriptions,
        uint256 startTime,
        uint256 endTime,
        address sToken,
        uint256 sTotal
    );
    // event EventesCreated(uint256[] idxs);
}
