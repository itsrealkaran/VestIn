// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CustomToken.sol";
import "./ProjectNFT.sol";

contract Vesting {
    CustomToken public customToken;
    ProjectNFT public projectNFT;

    struct Milestone {
        uint256 q1Amount;
        uint256 q2Amount;
        uint256 q3Amount;
        uint256 q4Amount;
        bool q1Complete; 
        bool q2Complete;
        bool q3Complete;
        bool q4Complete;
    }

    mapping(uint256 => Milestone) public milestones;

    constructor(address _customToken, address _projectNFT) {
        customToken = CustomToken(_customToken);
        projectNFT = ProjectNFT(_projectNFT);
    }

    function releaseFunds(uint256 tokenId, uint8 milestone) public {
        Milestone storage ms = milestones[tokenId];
        ProjectNFT.Project memory project = projectNFT.getProject(tokenId);

        require(project.owner == msg.sender, "Only project owner can request funds");

        if (milestone == 1 && !ms.q1Complete) {
            ms.q1Complete = true;
            customToken.transfer(msg.sender, ms.q1Amount);
        } else if (milestone == 2 && ms.q1Complete && !ms.q2Complete) {
            ms.q2Complete = true;
            customToken.transfer(msg.sender, ms.q2Amount);
        } else if (milestone == 3 && ms.q2Complete && !ms.q3Complete) {
            ms.q3Complete = true;
            customToken.transfer(msg.sender, ms.q3Amount);
        } else if (milestone == 4 && ms.q3Complete && !ms.q4Complete) {
            ms.q4Complete = true;
            customToken.transfer(msg.sender, ms.q4Amount);
        } else {
            revert("Invalid milestone or milestone already completed");
        }
    }

    function setMilestoneFunds(
        uint256 tokenId,
        uint256 q1Amount,
        uint256 q2Amount,
        uint256 q3Amount,
        uint256 q4Amount
    ) public {
        milestones[tokenId] = Milestone(q1Amount, q2Amount, q3Amount, q4Amount, false, false, false, false);
    }
}
