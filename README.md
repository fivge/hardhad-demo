# hardhat demo

## 01

```bash
yarn hardhat compile
# yarn hardhat test
# REPORT_GAS=true yarn hardhat test
yarn hardhat node
yarn hardhat run scripts/deploy.ts
yarn hardhat run scripts/deploy.ts --network localhost
```

## 02 任务和脚本

```bash
yarn hardhat accounts
yarn hardhat run scripts/accounts.ts
```

## 03 hardhat ignition

```bash
yarn hardhat ignition deploy ignition/modules/Apollo.ts --network localhost
```

## 04 `@openzeppelin/contracts`

```bash
yarn hardhat ignition deploy ignition/modules/MToken.ts --network sepolia
yarn hardhat run scripts/deploy-simpletoken.ts  --network sepolia
```

## 05 ~~The Graph~~

https://thegraph.com/docs/zh/quick-start/

```bash
graph init tg-02 tg-02 --protocol ethereum --network sepolia --abi "./ignition/deployments/chain-11155111/artifacts/MTOKEN#SimpleToken.json" --from-contract 0xF887Ac1b01439475bD75904359A4CB741E640b93 --start-block 5441889 --studio
```

```bash
graph auth --studio

graph codegen && graph build

graph deploy --studio tg-01
```

Error: Failed to upload file to IPFS: fetch failed

**GIVE UP**
