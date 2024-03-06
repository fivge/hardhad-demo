import { HardhatUserConfig, task, subtask } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
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
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs, hre) => {
    const balance = await hre.ethers.provider.getBalance(taskArgs.account);

    // console.log(hre.ethers.utils.formatEther(balance), "ETH");
  });

task("hello", "Prints a greeting")
  .addOptionalParam("greeting", "The greeting to print", "Hello, World!")
  .setAction(async ({ greeting }) => console.log(greeting));

task("hello-world", "Prints a hello world message").setAction(
  async (taskArgs, hre) => {
    await hre.run("print", { message: "Hello, World!" });
  }
);

subtask("print", "Prints a message")
  .addParam("message", "The message to print")
  .setAction(async (taskArgs) => {
    console.log(taskArgs.message);
  });

export default config;
