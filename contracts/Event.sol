// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./ChainlinkClientUpgradable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./EDataTypes.sol";
import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";

import "hardhat/console.sol";

contract EventStorage {
    mapping(uint256 => EDataTypes.Event) public events;
    uint256 public nEvents;
}

contract Event is EventStorage, OwnableUpgradeable, ChainlinkClientUpgradable, KeeperCompatibleInterface {
    using Chainlink for Chainlink.Request;

    function initialize() public initializer {
        nEvents = 800;
        OwnableUpgradeable.__Ownable_init();
        ChainlinkClientUpgradable.__ChainlinkClient_init();
    }

    function setOracle(address _token, address _oracle) public onlyOwner {
        setChainlinkToken(_token);
        setChainlinkOracle(_oracle);
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    function updateEventResult(uint256 _eventId, uint256 _index) external {
        EDataTypes.Event storage _event = events[_eventId];
        require(_index < _event.odds.length, "cannot-find-index");
        require(_event.creator == msg.sender, "unauthorized");
        require(_event.endTime <= block.timestamp, "end_time <= timestamp");
        require(_event.endTime + 172800 >= block.timestamp, "end_time + 2 days >= timestamp");
        require(_event.pro == 0, "not pro event");

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
        string memory _datas,
        address _creator,
        uint256 _pro
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
            _creator,
            _odds,
            _datas,
            _pro
        );
        emit EventCreated(_idx, _startTime, _deadlineTime, _endTime, _helperAddress, _creator, _odds, _datas, _pro);
        nEvents++;
    }

    /* ========== CHAIN LINK FUNCTIONS ========== */

    function toBytes(uint256 x) internal pure returns (bytes memory b) {
        b = new bytes(32);
        assembly {
            mstore(add(b, 32), x)
        }
    }

    function checkUpkeep(
        bytes calldata /* checkData */
    ) public view override returns (bool upkeepNeeded, bytes memory performData) {
        string memory performString;
        for (uint256 i = 0; i < nEvents; ++i) {
            if (
                events[i].pro > 0 &&
                events[i].endTime <= block.timestamp &&
                events[i].status == EDataTypes.EventStatus.AVAILABLE
            ) {
                upkeepNeeded = true;
                performString = string(bytes.concat(bytes(performString), bytes(Strings.toString(i)), " "));
            }
        }
        performData = bytes(performString);
    }

    function performUpkeep(bytes calldata performData) public override {
        Chainlink.Request memory req = buildChainlinkRequest(
            "be4e83014253469fa22494b0e50e05d6",
            address(this),
            this.fulfill.selector
        );
        req.add("get", string(performData));
        req.add("path", "data");
        sendChainlinkRequest(req, 0);
    }

    /**
     * Receive the response in the form of string
     */
    function fulfill(bytes32 _requestId, string memory _data) public recordChainlinkFulfillment(_requestId) {
        bool pos = false;
        uint256 eventId = 0;
        uint256 number = 0;
        bytes memory data = bytes(_data);

        for (uint256 i = 0; i < data.length; i++) {
            uint8 c = uint8(data[i]);
            if (c >= 48 && c < 58) {
                number = number * 10 + c - 48;
            } else {
                if (!pos) {
                    eventId = i;
                    pos = true;
                } else {
                    events[eventId].resultIndex = number;
                    pos = false;
                }
                number = 0;
            }
        }
    }

    /**
     * Allow withdraw of Link tokens from the contract
     */
    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), "Unable to transfer");
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
        string datas,
        uint256 pro
    );
}
