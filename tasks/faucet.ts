import { HardhatUserConfig, task } from "hardhat/config";
import fs from "node:fs";

// This file is only here to make interacting with the Dapp easier,
// feel free to ignore it if you don't need it.

task("faucet", "Sends ETH and tokens to an address")
  .addPositionalParam("receiver", "The address that will receive them")
  .setAction(async (taskArgs, hre) => {
    const { receiver } = taskArgs;
    if (hre.network.name === "hardhat") {
      console.warn(
        "You are running the faucet task with Hardhat network, which" +
          "gets automatically created and destroyed every time. Use the Hardhat" +
          " option '--network localhost'"
      );
    }

    const addressesFile =
      __dirname + "/../frontend/src/contracts/contract-address.json";

    if (!fs.existsSync(addressesFile)) {
      console.error("You need to deploy your contract first");
      return;
    }

    const addressJson = fs.readFileSync(addressesFile, { encoding: "utf-8" });
    const address = JSON.parse(addressJson);

    if ((await hre.ethers.provider.getCode(address.contractAddress)) === "0x") {
      console.error("You need to deploy your contract first");
      return;
    }

    const token = await hre.ethers.getContractAt(
      "SimpleToken",
      address.contractAddress
    );
    const [sender] = await hre.ethers.getSigners();

    const tx = await token.transfer(receiver, 100);
    await tx.wait();

    const tx2 = await sender.sendTransaction({
      to: receiver,
      value: hre.ethers.constants.WeiPerEther,
    });
    await tx2.wait();

    console.log(`Transferred 1 ETH and 100 tokens to ${receiver}`);
  });
