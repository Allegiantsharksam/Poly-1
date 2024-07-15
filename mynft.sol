// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    mapping(uint256 => string) private _promptDescriptions;

    constructor() ERC721("MyNFT", "MNFT") {
        tokenCounter = 0;
    }

    function createNFT(string memory tokenURI, string memory promptDescription) public onlyOwner returns (uint256) {
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        _promptDescriptions[newItemId] = promptDescription;
        tokenCounter += 1;
        return newItemId;
    }

    function promptDescription(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: Query for nonexistent token");
        return _promptDescriptions[tokenId];
    }
}
