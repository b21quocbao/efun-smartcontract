// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.8.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./MDataTypes.sol";

// import "hardhat/console.sol";

contract MiniMatch is Ownable {
    uint256 public nMatches;

    mapping(address => bool) admins;
    mapping(uint256 => MDataTypes.Match) public matches;

    /* ========== MODIFIERS ========== */

    modifier onlyOwnerOrAdmin() {
        require(msg.sender == owner() || admins[msg.sender] == true, "!owner && admin");
        _;
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    function setAdminPermission(address _admin, bool _status) external onlyOwner {
        admins[_admin] = _status;
    }

    function createMatches(
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
            _idx = nMatches;
            // _ids[i] = _idx;
            matches[_idx] = MDataTypes.Match(
                _descriptions[i],
                _startTimes[i],
                _endTimes[i],
                MDataTypes.Score(0, 0),
                MDataTypes.MatchStatus.AVAILABLE,
                _sToken[i],
                _sTotal[i] * 10**18
            );
            emit MatchCreated(_idx, _descriptions[i], _startTimes[i], _endTimes[i], _sToken[i], _sTotal[i]);
            nMatches++;
        }
        // emit MatchesCreated(_ids);
    }

    function updateSToken(
        uint256[] calldata _matchIds,
        address[] calldata _sToken,
        uint256[] calldata _sTotal
    ) external onlyOwnerOrAdmin {
        require(_matchIds.length > 0, "size = 0");

        for (uint256 i = 0; i < _matchIds.length; i++) {
            MDataTypes.Match storage _match = matches[_matchIds[i]];
            _match.sToken = _sToken[i];
            _match.sTotal = _sTotal[i];
        }
    }

    function updateMatchScores(
        uint256[] calldata _matchIds,
        uint256[] calldata _point1,
        uint256[] calldata _point2
    ) external onlyOwnerOrAdmin {
        require(_matchIds.length > 0, "size = 0");
        require(_matchIds.length == _point1.length && _point1.length == _point2.length, "not-same-size");

        for (uint256 i = 0; i < _matchIds.length; i++) {
            updateMatchScore(_matchIds[i], MDataTypes.Score(_point1[i], _point2[i]));
        }
    }

    function updateMatchStatuses(uint256[] memory _matchIds, MDataTypes.MatchStatus[] memory _status)
        external
        onlyOwnerOrAdmin
    {
        require(_matchIds.length > 0, "size = 0");
        require(_matchIds.length == _status.length, "not-same-size");
        for (uint256 i = 0; i < _matchIds.length; i++) {
            updateMatchStatus(_matchIds[i], _status[i]);
        }
    }

    /* ========== PUBLIC FUNCTIONS ========== */

    function info(uint256 _matchId) external view returns (MDataTypes.Match memory _match) {
        _match = matches[_matchId];
    }

    /* ========== INTERNAL FUNCTIONS ========== */

    function createSingleMatch(
        bytes32 _description,
        uint256 _startTime,
        uint256 _endTime,
        address _sToken,
        uint256 _sTotal
    ) internal returns (uint256 _idx) {
        _idx = nMatches;
        matches[_idx] = MDataTypes.Match(
            _description,
            _startTime,
            _endTime,
            MDataTypes.Score(0, 0),
            MDataTypes.MatchStatus.AVAILABLE,
            _sToken,
            _sTotal
        );
        emit MatchCreated(_idx, _description, _startTime, _endTime, _sToken, _sTotal);
        nMatches++;
    }

    function updateMatchScore(uint256 _matchId, MDataTypes.Score memory _score) internal {
        MDataTypes.Match storage _match = matches[_matchId];
        _match.score = _score;
        emit MatchScoreUpdated(msg.sender, _matchId, _score);
    }

    function updateMatchStatus(uint256 _matchId, MDataTypes.MatchStatus _status) internal {
        MDataTypes.Match storage _match = matches[_matchId];
        _match.status = _status;
        emit MatchStatusUpdated(msg.sender, _matchId, _status);
    }

    /* =============== EVENTS ==================== */

    event MatchScoreUpdated(address caller, uint256 matchId, MDataTypes.Score score);
    event MatchStatusUpdated(address caller, uint256 matchId, MDataTypes.MatchStatus status);
    event MatchCreated(
        uint256 idx,
        bytes32 descriptions,
        uint256 startTime,
        uint256 endTime,
        address sToken,
        uint256 sTotal
    );
    // event MatchesCreated(uint256[] idxs);
}
