# Vestin

**Vestin** is a decentralized platform that enables developers to directly list their projects, while investors can invest using a custom token (VSTN). All transactions on the platform are executed using this custom token, and each listed project is represented as an NFT, ensuring unique ownership verification. Vestin prioritizes a seamless interaction between developers and investors, with no commission charges, and is designed to create long-term token liquidity through smart contract-managed vesting.

## Key Features

- **Developer-Listed Projects**: Developers can list their projects directly on the platform for potential investors. Each project is represented as an NFT to ensure unique ownership.

- **Investor Opportunities**: Investors can directly invest in these projects using the custom token VSTN.

- **VSTN Token**: The platform’s custom token (VSTN) is the only mode of transaction. Vestin holds 10% of the total token supply for revenue generation, while 90% is in circulation to facilitate transactions.

- **No Commission**: Vestin charges no commission from developers or investors, making it a frictionless experience for both parties.

- **Vesting**: Each investment involves a vesting schedule, which is handled automatically via smart contracts. The vested amounts are released over time, ensuring security and commitment.

- **Increased Token Liquidity**: With investments flowing into the platform, the VSTN token’s liquidity is expected to increase, thereby increasing its value.

## Revenue Model

Vestin's revenue model is based entirely on the appreciation of its custom token (VSTN). By holding 10% of the total token supply, the platform benefits from any increase in token value as investments are made. The remaining 90% of tokens are circulated for transactions, promoting liquidity and encouraging user participation. This model allows for a sustainable ecosystem where both developers and investors can thrive without incurring direct costs.

## Smart Contracts Overview

### VSTN Token
This contract defines the supply of VSTN tokens, with 10% held by Vestin and 90% in circulation. It ensures that VSTN tokens can be used for all transactions on the platform and are transactable by other contracts.

### Project NFT Contract
Each project is minted as an NFT with all relevant project data such as the project name, theme, outline, video URL, and social links. The NFT contract also maintains records of all minted projects and provides a function to fetch details for any given project.

### Vesting Smart Contract
This contract handles the automatic vesting process, ensuring that tokens are released over time to investors as per the vesting schedule. It guarantees transparency and security in managing the flow of tokens post-investment.

## Project Structure

### Contracts
- **VSTNToken.sol**: Implements the custom token with supply distribution and transaction logic.
- **ProjectNFT.sol**: Manages the minting of project NFTs, tracks all minted NFTs, and provides functions to retrieve project details.
- **VestingContract.sol**: Implements the vesting logic that automates the release of tokens over time to investors.

## Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/vestin.git
   cd vestin
   ```

2. **Install Dependencies**:
   Ensure you have `Node.js` installed. Then run:
   ```bash
   npm install
   ```

## Usage

- **Minting a Project NFT**: A developer can mint an NFT for their project, including project details, social links, and relevant documents.

- **Fetching Project Details**: Investors can fetch all minted NFTs and view the project details before investing.

- **Investing and Vesting**: Upon investment, a vesting schedule is automatically set in place for the investor, ensuring the release of tokens over time.

## Demonstration

- **Demo Link**: https://drive.google.com/drive/folders/1nl1Usx42Rj3iUtb5_4nnQOBecMIUvQK4?usp=sharing/

- **Deployment Link**: https://vestin.vercel.app/

## Screenshots
![Screenshot 2024-09-30 234604](https://github.com/user-attachments/assets/1ea8ef3e-cc2e-4ddf-9628-465c78ac5f5c)
![Screenshot 2024-09-30 234849](https://github.com/user-attachments/assets/8de6337b-8685-4290-805a-d12292fdddf9)
![Screenshot 2024-10-01 004819](https://github.com/user-attachments/assets/1e9bbdb3-ce3c-4cb3-bb98-399729a819e7)
![Screenshot 2024-10-01 004703](https://github.com/user-attachments/assets/aadf5b55-926f-4c41-99cd-9dc0fbd4532b)
![Screenshot 2024-09-30 234924](https://github.com/user-attachments/assets/843f4701-4484-4287-a7fe-43de7973b71a)
![Screenshot 2024-09-30 235130](https://github.com/user-attachments/assets/f6dd1125-54a9-45e3-a422-91a75d9c2985)
![Screenshot 2024-10-01 004835](https://github.com/user-attachments/assets/2d6b95d3-1a49-46f7-a7e5-ce8e178046c5)

## License

This project is licensed under the [MIT License](LICENSE).
