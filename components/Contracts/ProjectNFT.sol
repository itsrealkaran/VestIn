// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProjectNFT is ERC721, Ownable {
    uint256 public nextTokenId = 0;
    mapping(uint256 => Project) public projects;

    struct Project {
        string name;
        string description;
        string image;
        address owner;
        address tokenAddress;
    }

    constructor() ERC721("ProjectNFT", "PNFT") Ownable(msg.sender) {}

    function mintProjectNFT(
        address to,
        string memory name,
        string memory description,
        string memory image,
        address tokenAddress
    ) public onlyOwner {
        uint256 tokenId = nextTokenId++;
        _mint(to, tokenId);
        projects[tokenId] = Project(name, description, image, to, tokenAddress);
    }

    function getProject(uint256 tokenId) public view returns (Project memory) {
        return projects[tokenId];
    }
}
