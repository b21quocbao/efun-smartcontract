// SPDX-License-Identifier: UNLICENSED
// EFUN 2022

pragma solidity ^0.8.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./SDataTypesExt.sol";

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// import "hardhat/console.sol";

contract SponsoredMatchLink is Ownable {
    AggregatorV3Interface internal priceFeed;

    uint256 public nMatches;

    mapping(address => bool) admins;
    mapping(uint256 => SDataTypesExt.Match) public matches;
    mapping(uint256 => SDataTypesExt.FinalResult) public finalResult;

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
        bytes32 _description,
        uint256[] memory _time,
        address[] memory _sToken, // 0: reward token, 1: oracle price
        uint256[] calldata _resultType, // 0,1,2, 3 (string)
        uint256[] calldata _resultFrom,
        uint256[] calldata _resultTo
    ) external onlyOwnerOrAdmin {
        uint256 _idx;
        require(_resultFrom.length == _resultTo.length, "not-same-size");
        require(_resultType.length > 0, "size = 0");
        require(_time[1] > block.timestamp, "ERROR: end_time < timestamp");

        _idx = nMatches;
        _idx = createSingleMatch(
            _description,
            _time[0],
            _time[1],
            _time[2],
            _sToken[0],
            _sToken[1],
            setResults(_resultType, _resultFrom, _resultTo)
        );
    }

    function updateSToken(uint256 _matchId, address _sToken) external onlyOwnerOrAdmin {
        matches[_matchId].sToken = _sToken;
    }

    function updateOToken(uint256 _matchId, address _oToken) external onlyOwnerOrAdmin {
        matches[_matchId].oToken = _oToken;
    }

    function setPricePair(address _pricePair) external onlyOwnerOrAdmin {
        priceFeed = AggregatorV3Interface(_pricePair);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int256) {
        (
            ,
            /*uint80 roundID*/
            int256 price, /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/
            ,
            ,

        ) = priceFeed.latestRoundData();
        return price;
    }

    function updateMatchScoresManual(uint256 _matchId, uint256 _wOption) external onlyOwnerOrAdmin {
        require(block.timestamp > matches[_matchId].resultTime, "invalid-end-time");
        require(matches[_matchId].status == SDataTypesExt.MatchStatus.AVAILABLE, "match-not-available");
        updateMatchScore(_matchId, _wOption);
    }

    function updateMatchScores(uint256 _matchId) external {
        require(block.timestamp > matches[_matchId].resultTime, "invalid-end-time");
        require(matches[_matchId].status == SDataTypesExt.MatchStatus.AVAILABLE, "match-not-available");

        // get price from chainlink
        priceFeed = AggregatorV3Interface(matches[_matchId].oToken);
        (
            ,
            /*uint80 roundID*/
            int256 price, /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/
            ,
            ,

        ) = priceFeed.latestRoundData();

        uint256 tPrice = uint256(price);
        SDataTypesExt.Results memory _sResult = matches[_matchId].sResult;

        for (uint256 i = 0; i < _sResult.rType.length; i++) {
            if (_sResult.rType[i] == 0) {
                // range from to
                if (tPrice > _sResult.rValueFrom[i] * 10**5 && tPrice < _sResult.rValueTo[i] * 10**5) {
                    // won
                    updateMatchScore(_matchId, i);
                    setFinalResult(_matchId, tPrice);
                    break;
                }
            }
            if (_sResult.rType[i] == 1) {
                // <, use from value
                if (tPrice <= _sResult.rValueFrom[i] * 10**5) {
                    // won
                    updateMatchScore(_matchId, i);
                    setFinalResult(_matchId, tPrice);
                    break;
                }
            }
            if (_sResult.rType[i] == 2) {
                // >, use from value
                if (tPrice >= _sResult.rValueFrom[i] * 10**5) {
                    // won
                    updateMatchScore(_matchId, i);
                    setFinalResult(_matchId, tPrice);
                    break;
                }
            }
        }
    }

    function updateMatchStatuses(uint256[] memory _matchIds, SDataTypesExt.MatchStatus[] memory _status)
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

    function info(uint256 _matchId)
        external
        view
        returns (SDataTypesExt.Match memory _match, SDataTypesExt.FinalResult memory _finalPrice)
    {
        _match = matches[_matchId];
        _finalPrice = finalResult[_matchId];
    }

    /* ========== INTERNAL FUNCTIONS ========== */

    function createSingleMatch(
        bytes32 _description,
        uint256 _startTime,
        uint256 _endTime,
        uint256 _resultTime,
        address _sToken,
        address _oToken,
        SDataTypesExt.Results memory sResult
    ) internal returns (uint256 _idx) {
        _idx = nMatches;
        matches[_idx] = SDataTypesExt.Match(
            _description,
            _startTime,
            _endTime,
            _resultTime,
            0,
            SDataTypesExt.MatchStatus.AVAILABLE,
            _sToken,
            _oToken,
            sResult
        );
        emit MatchCreated(_idx, _description, _startTime, _endTime, _resultTime, _sToken, sResult);
        nMatches++;
    }

    function setFinalResult(uint256 _matchId, uint256 _finalPrice) internal {
        finalResult[_matchId].price = _finalPrice;
        finalResult[_matchId].finaltime = block.timestamp;
    }

    function setResults(
        uint256[] calldata _resultType, // 0,1,2, 3 (string)
        uint256[] calldata _resultFrom, // value * 1000
        uint256[] calldata _resultTo // value * 1000
    ) internal pure returns (SDataTypesExt.Results memory sResult) {
        for (uint256 i = 0; i < _resultType.length; i++) {
            sResult.rType[i] = _resultType[i];
            sResult.rValueFrom[i] = _resultFrom[i];
            sResult.rValueTo[i] = _resultTo[i];
        }
    }

    function updateMatchScore(uint256 _matchId, uint256 _winOption) internal {
        SDataTypesExt.Match storage _match = matches[_matchId];
        _match.winOption = _winOption;
        _match.status = SDataTypesExt.MatchStatus.FINISH;
        emit MatchScoreUpdated(msg.sender, _matchId, _winOption);
    }

    function updateMatchStatus(uint256 _matchId, SDataTypesExt.MatchStatus _status) internal {
        SDataTypesExt.Match storage _match = matches[_matchId];
        _match.status = _status;
        emit MatchStatusUpdated(msg.sender, _matchId, _status);
    }

    /* =============== EVENTS ==================== */

    event MatchScoreUpdated(address caller, uint256 matchId, uint256 winOption);
    event MatchStatusUpdated(address caller, uint256 matchId, SDataTypesExt.MatchStatus status);
    event MatchCreated(
        uint256 idx,
        bytes32 descriptions,
        uint256 startTime,
        uint256 endTime,
        uint256 resultTime,
        address sToken,
        SDataTypesExt.Results sResult
    );
    // event MatchesCreated(uint256[] idxs);
}
