# The Graph

```shell
graph init tg-01 tg-01 --protocol ethereum --network sepolia --abi ./artifacts/contracts/SimpleToken.sol/SimpleToken.json --from-contract 0x12A517F5364c5475E5Bd18348e48178b24BceD60 --start-block 3735795 --studio

graph auth --studio

graph codegen && graph build

graph deploy --studio tg-01
```

---

<https://thegraph.com/docs/zh/cookbook/quick-start/>

```bash
graph init tg-02 tg-02 --protocol ethereum --network sepolia --abi "./ignition/deployments/chain-11155111/artifacts/MTOKEN#SimpleToken.json" --from-contract 0xF887Ac1b01439475bD75904359A4CB741E640b93 --start-block 5441889 --studio
```
