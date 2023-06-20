import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const token = await ethers.deployContract("SimpleToken", [
    "SimpleToken",
    "ST",
    18,
    10000000000,
  ]);

  await token.waitForDeployment();

  console.log("Token address:", await token.getAddress());

  let balance = await token.balanceOf(deployer.address);
  console.log(balance.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
