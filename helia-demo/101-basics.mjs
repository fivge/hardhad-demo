import { createHelia } from "helia";
import { unixfs } from "@helia/unixfs";
import { MemoryBlockstore } from "blockstore-core";

const blockstore = new MemoryBlockstore();

// create a Helia node
const helia = await createHelia({ blockstore });

// create a filesystem on top of Helia, in this case it's UnixFS
const fs = unixfs(helia);

// we will use this TextEncoder to turn strings into Uint8Arrays
const encoder = new TextEncoder();
const bytes = encoder.encode("Hello World 101");

// add the bytes to your node and receive a unique content identifier
const cid = await fs.addBytes(bytes);

console.log("Added file:", cid.toString());

// this decoder will turn Uint8Arrays into strings
const decoder = new TextDecoder();
let text = "";

for await (const chunk of fs.cat(cid)) {
  text += decoder.decode(chunk, {
    stream: true,
  });
}

console.log("Added file contents:", text);

text = "";

console.log("Added file contents ----:", text);

const helia2 = await createHelia();
const fs2 = unixfs(helia2);

for await (const chunk of fs2.cat(cid)) {
  text += decoder.decode(chunk, {
    stream: true,
  });
}

console.log("Added file contents 2:", text);
