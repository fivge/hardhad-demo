import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const receiver = process.env.RECIVE_ACCOUNT!;
  // const CONTRACT_ADDRESS = "0x0BAe178Dd1B22Ad0Be03ba7c9f1adD3e0A690c26";
  const CONTRACT_ADDRESS = "0xF887Ac1b01439475bD75904359A4CB741E640b93";

  // #region 1
  // const token = await ethers.deployContract("SimpleToken", [
  //   "梦幻精炼材",
  //   "MTOKEN",
  //   0,
  //   999999,
  // ]);
  // await token.waitForDeployment();

  const token = await ethers.getContractAt("SimpleToken", CONTRACT_ADDRESS);

  console.log("Token address:", await token.getAddress());
  // #endregion

  // #region 2 Balance & Transfer
  const balance = await token.balanceOf(deployer.address);
  console.log("Account balance:", balance.toString());

  let transferReceipt = await token.transfer(receiver, 50);
  await transferReceipt.wait();

  let rbalance = await token.balanceOf(receiver);
  console.log("Account balance of receiver is:", rbalance.toString());
  // #endregion

  // #region 3 Approve
  let allowance = await token.allowance(deployer.address, receiver);
  console.log(
    `allowance of ${deployer.address} to ${receiver} is `,
    allowance.toString()
  );

  let approveRecipt = await token.approve(receiver, 1000);
  await approveRecipt.wait();

  allowance = await token.allowance(deployer.address, receiver);
  console.log(
    `allowance of ${deployer.address} to ${receiver} is `,
    allowance.toString()
  );
  // #endregion
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
