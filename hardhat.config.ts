import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const id = process.env.INFURA_ID;

function mnemonic() {
  return process.env.PRIVATE_KEY!;
}

const config: HardhatUserConfig = {
  // hardhat sepolia
  // defaultNetwork: "sepolia",
  networks: {
    // hardhat: {
    // },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${id}`,
      accounts: [mnemonic()],
    },
  },
  solidity: "0.8.18",
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

export default config;
