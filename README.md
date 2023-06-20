# Hardhat

> quick start

```shell
yarn hardhat
yarn hardhat help
yarn hardhat test
REPORT_GAS=true yarn hardhat test
yarn hardhat node
yarn hardhat run scripts/deploy.ts
yarn hardhat run scripts/deploy.ts --network localhost
```

## OPTIONS

### `--network`

- `--network localhost`
- `--network hardhat`
- `--network sepolia`

## task

```js
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
```

```shell
yarn hardhat accounts
```

## typescript

```shell
yarn ts-node --files scripts/accounts.ts
```

This can also be enabled with `TS_NODE_FILES=true`

---

<https://hardhat.org/>
