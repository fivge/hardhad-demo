import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const receiver = process.env.RECIVE_ACCOUNT!;

  console.log("Deploying contracts with the account:", deployer.address);

  /******************************** Token ****************************************************/
  const token = await ethers.deployContract("SimpleToken", [
    "CoolToken",
    "C",
    18,
    10000000000,
  ]);

  await token.waitForDeployment();

  console.log("Token address:", await token.getAddress());

  /******************************** Balance ****************************************************/
  const balance = await token.balanceOf(deployer.address);
  console.log("Account balance:", balance.toString());

  /******************************** Transfer ****************************************************/
  console.log("Transfer 50 to receiver ", receiver);
  let transferReceipt = await token.transfer(receiver, 50);
  await transferReceipt.wait();

  let rbalance = (await token.balanceOf(receiver)).toString();
  console.log("Account balance of receiver is:", rbalance);

  /******************************** Approve ****************************************************/
  let approveRecipt = await token.approve(receiver, 1000);
  await approveRecipt.wait();
  const allowance = (
    await token.allowance(deployer.address, receiver)
  ).toString();
  console.log(`allowance of ${deployer.address} to ${receiver} is `, allowance);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
