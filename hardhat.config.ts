import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const privatekey = process.env.PRIVATE_KEY as string;
const id = process.env.INFURA_ID;

const config: HardhatUserConfig = {
  // hardhat sepolia
  // defaultNetwork: "sepolia",
  networks: {
    // hardhat: {
    // },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${id}`,
      accounts: [privatekey],
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
