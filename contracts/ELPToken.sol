// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";
import "./ChainlinkClientUpgradable.sol";
import "./ComPool.sol";

contract ELPToken is ERC20Upgradeable, OwnableUpgradeable, KeeperCompatibleInterface, ChainlinkClientUpgradable {
    using Chainlink for Chainlink.Request;
    using SafeERC20Upgradeable for IERC20Upgradeable;

    address public efunToken;
    address public poolAddress;
    uint256 public maxSellAmount;
    uint256 public maxSellAmountPerAddress;
    address payable public feeCollector;
    uint256 public counter;
    uint256 public lastTimeStamp;
    mapping(uint256 => mapping(address => uint256)) public totalSellAmount;

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    function initialize(
        string memory _name,
        string memory _symbol,
        address _poolAddress,
        address _efunToken,
        address _to,
        address payable _feeCollector,
        uint256 _elpAmt
    ) public initializer {
        ERC20Upgradeable.__ERC20_init(_name, _symbol);
        poolAddress = _poolAddress;
        efunToken = _efunToken;
        feeCollector = _feeCollector;
        ChainlinkClientUpgradable.__ChainlinkClient_init();
        _mint(_to, _elpAmt);
    }

    function setFeeCollector(address _feeCollector) public onlyOwner {
        feeCollector = payable(_feeCollector);
    }

    function currentNav() public view returns (uint256) {
        return ComPool(poolAddress).capacity() / totalSupply();
    }

    function buyToken(address _to, uint256 _elpAmt) public {
        uint256 _efunAmt = currentNav() * _elpAmt;
        IERC20Upgradeable(efunToken).safeTransferFrom(msg.sender, address(poolAddress), _efunAmt);
        _mint(_to, _elpAmt);
    }

    function sellToken(uint256 _elpAmt) public {
        require(_elpAmt <= maxSellAmount, "exceed-total-sell-amount");
        require(totalSellAmount[counter][msg.sender] + _elpAmt <= maxSellAmountPerAddress, "exceed-amount-per-user");
        maxSellAmount -= _elpAmt;
        totalSellAmount[counter][msg.sender] += _elpAmt;
        uint256 _efunAmt = currentNav() * _elpAmt;
        IERC20Upgradeable(efunToken).safeTransferFrom(address(poolAddress), msg.sender, (_efunAmt * 98) / 100);
        IERC20Upgradeable(efunToken).safeTransferFrom(address(poolAddress), feeCollector, (_efunAmt * 2) / 100);
        _burn(msg.sender, _elpAmt);
    }

    function checkUpkeep(
        bytes calldata /* checkData */
    ) public view override returns (bool upkeepNeeded, bytes memory performData) {
        upkeepNeeded = (block.timestamp - lastTimeStamp) > 86400;
    }

    function performUpkeep(
        bytes calldata /* performData */
    ) public override {
        if ((block.timestamp - lastTimeStamp) > 86400) {
            maxSellAmount = totalSupply() / 20;
            maxSellAmountPerAddress = maxSellAmount / 5;
            ++counter;
            lastTimeStamp = block.timestamp;
        }
    }
}
