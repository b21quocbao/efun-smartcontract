// SPDX-License-Identifier: GPL-3.0

pragma solidity =0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";

contract ERC721Token is ERC721Enumerable, Ownable {
    using Strings for uint256;

    address public exchangeContractAddress;
    address public elpTokenAddress;

    // Mapping from token ID to owner address
    mapping(uint256 => address) private _owners;

    constructor(
        string memory _name,
        string memory _symbol,
        address _exchangeContractAddress,
        address _elpTokenAddress
    ) ERC721(_name, _symbol) {
        exchangeContractAddress = _exchangeContractAddress;
        elpTokenAddress = _elpTokenAddress;
    }

    function mint(address _owner) external returns (uint256) {
        require(msg.sender == elpTokenAddress, "not-valid-sender");
        uint256 supply = totalSupply();

        _owners[supply + 1] = _owner;
        _safeMint(_owner, supply + 1);
        return supply + 1;
    }

    function _isExchangeContract(address spender) internal view virtual returns (bool) {
        return spender == exchangeContractAddress;
    }

    /**
     * @dev See {IERC721-isApprovedForAll}.
     */
    function isApprovedForAll(address owner, address operator) public view virtual override(ERC721) returns (bool) {
        return _isExchangeContract(operator) || super.isApprovedForAll(owner, operator);
    }

    /**
     * @dev See {IERC721-transferFrom}.
     */
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(ERC721) {
        require(
            _isExchangeContract(_msgSender()) || _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );

        _transfer(from, to, tokenId);
    }

    /**
     * @dev See {IERC721-ownerOf}.
     */
    function ownerOf(uint256 tokenId) public view virtual override(ERC721) returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "ERC721: owner query for nonexistent token");
        return owner;
    }

    function walletOfOwner(address _owner) public view returns (uint256[] memory) {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    /**
     * @dev See {IERC721-getApproved}.
     */
    function getApproved(uint256 tokenId) public view virtual override(ERC721) returns (address) {
        return address(0);
    }

    function setExchangeContractAddress(address _exchangeContractAddress) public onlyOwner {
        exchangeContractAddress = _exchangeContractAddress;
    }

    function setElpTokenAddress(address _elpTokenAddress) public onlyOwner {
        elpTokenAddress = _elpTokenAddress;
    }

    /**
     * @dev Burns `tokenId`. See {ERC721-_burn}.
     *
     * Requirements:
     *
     * - The caller must own `tokenId` or be an approved operator.
     */
    function burn(uint256 _tokenId, address _owner) external virtual {
        require(msg.sender == elpTokenAddress, "not-valid-sender");
        address owner = _owners[_tokenId];
        require(_owner == owner, "ERC721Burnable: caller is not owner");
        _burn(_tokenId);
    }
}
