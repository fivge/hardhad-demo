# The Graph

```shell
graph init tg-01 tg-01 --protocol ethereum --network sepolia --abi ./artifacts/contracts/SimpleToken.sol/SimpleToken.json --from-contract 0x12A517F5364c5475E5Bd18348e48178b24BceD60 --start-block 3735795 --studio

graph auth --studio

graph codegen && graph build

graph deploy --studio tg-01
```
