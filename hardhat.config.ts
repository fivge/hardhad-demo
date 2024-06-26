import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";
import dotenv from "dotenv";

import "./tasks/start";
import "./tasks/faucet";

dotenv.config();

const id = process.env.INFURA_ID;

function mnemonic() {
  return process.env.PRIVATE_KEY!;
}

const config: HardhatUserConfig = {
  // defaultNetwork: hardhat sepolia localhost
  defaultNetwork: "localhost",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/${id}`,
      accounts: [mnemonic()],
    },
  },
  solidity: "0.8.24",
  // solidity: {
  //   version: "0.8.24",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //       runs: 200,
  //     },
  //   },
  // },
  // ignition: {
  //   blockPollingInterval: 1_000,
  //   timeBeforeBumpingFees: 3 * 60 * 1_000,
  //   maxFeeBumps: 4,
  //   requiredConfirmations: 5,
  // },
};

export default config;
