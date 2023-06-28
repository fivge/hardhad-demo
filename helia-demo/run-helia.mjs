import { createHelia } from "helia";
import { strings } from "@helia/strings";

async function main() {
  const helia = await createHelia();
  const s = strings(helia);

  const myImmutableAddress = await s.add("hello world");

  console.log(myImmutableAddress);

  console.log(await s.get(myImmutableAddress));
  // hello world
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
