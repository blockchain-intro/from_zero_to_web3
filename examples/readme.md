
# ganache + truffle

使用ganache、truffle联合部署私链以及智能合约，并用console测试。

## test_gt example

### 测试账户

执行account.js

### 监听区块

执行server.js


## MetaCoin example

1. `ganache-cli -h 127.0.0.1 -p 7545 -i 5777`
2. 准备 `truffle unbox metacoin`
3. 测试 `truffle test ./test/TestMetaCoin.sol`
4. 编译 `truffle compile`
5. 部署 `truffle migrate`


参考`/MetaCoin/test_log.md`

## DApp





