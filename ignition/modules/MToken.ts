import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MTOKEN", (m) => {
  const token = m.contract("SimpleToken", ["梦幻精炼材", "MTOKEN", 0, 999999]);
  // const token = m.contractAt(
  //   "SimpleToken",
  //   "0x0BAe178Dd1B22Ad0Be03ba7c9f1adD3e0A690c26"
  // );

  return { token };
});
