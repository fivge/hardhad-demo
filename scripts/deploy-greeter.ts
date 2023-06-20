import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const greeter = await ethers.deployContract("Greeter", ["world"]);

  await greeter.waitForDeployment();

  console.log("Token address:", await greeter.greet());

  await greeter.setGreeting("fooo");

  console.log("Token address:", await greeter.greet());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
