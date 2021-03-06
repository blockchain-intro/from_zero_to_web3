## 启动ganache私链

```
ganache-cli -h 127.0.0.1 -p 7545 -i 5777

```

### 输出

```
Ganache CLI v6.12.2 (ganache-core: 2.13.2)

Available Accounts
==================
(0) 0xC024C85b37732F6Ed8a4a382b0Fe83A6B837d3A9 (100 ETH)
(1) 0x46F565762Ea6F87e5a9E590b23C0c4BdAceC23C0 (100 ETH)
(2) 0x367711260af477b1FdD4010fB5521F508896E86E (100 ETH)
(3) 0xf347c90a8260bCFA9eCE37291Ac653D8629068D1 (100 ETH)
(4) 0x1A248616fEf5F03533e47aEd66AeCd60b0e15983 (100 ETH)
(5) 0xE921Db519C1F06F6C386c1D031d6f4C8db0c6e83 (100 ETH)
(6) 0x0EE189ce7ECAa4F47D07678017f1061c6330C2F7 (100 ETH)
(7) 0x5B08Bfda78C7C83c0559fA585832C99A8f58EA0b (100 ETH)
(8) 0x9301f7e0A19640C19a51718C0eFDCBdb2349Df00 (100 ETH)
(9) 0xf729b0D20b5Af9e9aAf690a7C0BA4faAE91995F2 (100 ETH)

Private Keys
==================
(0) 0x07fd5f14151709c51ee1af59e9abd3fb625743a820f2ac431c146b54a8b88f10
(1) 0x760d05c874989cddbb477c3d31d585c9ca6670c420200d48830bb200a502ee29
(2) 0xf31203c7c9cb07883acad1aaa017a94f82a6913c9d774995583e315274484020
(3) 0xc35c990ff37bd1d5a3325bce164d9f60665079a8dd21b8b0617b9e3acd1393da
(4) 0x4b6da10b08cb4e707bdc2c8554569bfd1a177d2a2653be56a4c0f12aafbf004a
(5) 0x4f50100ecda16e54ed8dff2a330a112b3f52f703a14f9cadfca71a07ff5f4f8f
(6) 0x7ea52cd598b61430e9a33280a85f6f15921f75a1a3da59c442071602811b1a5d
(7) 0xd5b39ff2cb598ed5b4a33c3bf685abeff7aa4f767ca633b62d33c72acacab28b
(8) 0xeaad21d3ba157a44e19bddf430daf0b231960e89f203e1b6b55c10dd61c2b275
(9) 0x37ee762bb18cbf1b6e55f17c50f3acfe112865801232c52f32b7827d30698cfb

HD Wallet
==================
Mnemonic:      winter bone stay patch flower wish finish wear awful ritual observe inmate
Base HD Path:  m/44'/60'/0'/0/{account_index}

Gas Price
==================
20000000000

Gas Limit
==================
6721975

Call Gas Limit
==================
9007199254740991

Listening on 127.0.0.1:7545
eth_blockNumber
net_version
eth_accounts
eth_getBlockByNumber
eth_accounts
net_version
eth_getBlockByNumber
eth_getBlockByNumber
net_version
eth_getBlockByNumber
eth_estimateGas
net_version
eth_blockNumber
eth_getBlockByNumber
eth_estimateGas
eth_getBlockByNumber
eth_gasPrice
eth_sendTransaction

  Transaction: 0x18ca1f762bbe24c72c8f5fae9b54941452668ccec1efb4baddd29fa94eab238a
  Contract created: 0x11bc1b97b37b17200cd8822900816bbf63fd8eba
  Gas usage: 164175
  Block Number: 1
  Block Time: Tue Jun 28 2022 13:10:21 GMT+0000 (Coordinated Universal Time)

eth_getTransactionReceipt
eth_getCode
eth_getTransactionByHash
eth_getBlockByNumber
eth_getBalance
eth_getBlockByNumber
eth_getBlockByNumber
eth_estimateGas
eth_getBlockByNumber
eth_gasPrice
eth_sendTransaction

  Transaction: 0x43e745e8da0717428728dbe3249069bd9408eabbed357b0573f01857f19de1b3
  Gas usage: 42341
  Block Number: 2
  Block Time: Tue Jun 28 2022 13:10:21 GMT+0000 (Coordinated Universal Time)

eth_getTransactionReceipt
eth_getBlockByNumber
eth_accounts
net_version
eth_getBlockByNumber
eth_getBlockByNumber
net_version
eth_getBlockByNumber
eth_estimateGas
net_version
eth_blockNumber
eth_getBlockByNumber
eth_estimateGas
eth_getBlockByNumber
eth_gasPrice
eth_sendTransaction

  Transaction: 0x159f2f1847048e852c930c2501145a137ab33c331758f4a9501e5d32298e4fae
  Contract created: 0xf08d6fdd2fdf3c9736bea84bc36f1c36693c1d94
  Gas usage: 95470
  Block Number: 3
  Block Time: Tue Jun 28 2022 13:10:21 GMT+0000 (Coordinated Universal Time)

eth_getTransactionReceipt
eth_getCode
eth_getTransactionByHash
eth_getBlockByNumber
eth_getBalance
eth_getBlockByNumber
eth_getBlockByNumber
eth_getBlockByNumber
eth_estimateGas
eth_getBlockByNumber
eth_blockNumber
eth_estimateGas
eth_getBlockByNumber
eth_gasPrice
eth_sendTransaction

  Transaction: 0x2156dd4d6c3b87cdae84fad21eaae9040052e01cc190074f35ae269a993c10cb
  Contract created: 0x0f0777f012649176dd61721e47e1939b9ceea61e
  Gas usage: 286565
  Block Number: 4
  Block Time: Tue Jun 28 2022 13:10:21 GMT+0000 (Coordinated Universal Time)

eth_getTransactionReceipt
eth_getCode
eth_getTransactionByHash
eth_getBlockByNumber
eth_getBalance
eth_getBlockByNumber
eth_getBlockByNumber
eth_estimateGas
eth_getBlockByNumber
eth_gasPrice
eth_sendTransaction

  Transaction: 0xcef97b959fa1af8f51a1a2b299c2e5640c5e831db9f312fd7d59c7ca3366a1e6
  Gas usage: 27341
  Block Number: 5
  Block Time: Tue Jun 28 2022 13:10:21 GMT+0000 (Coordinated Universal Time)

eth_getTransactionReceipt

```


## 合约编译与部署

```
truffle compile

truffle migrate
```

### 输出

```

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'ganache'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x18ca1f762bbe24c72c8f5fae9b54941452668ccec1efb4baddd29fa94eab238a
   > Blocks: 0            Seconds: 0
   > contract address:    0x11bC1b97b37B17200Cd8822900816bbF63fD8Eba
   > block number:        1
   > block timestamp:     1656421821
   > account:             0xC024C85b37732F6Ed8a4a382b0Fe83A6B837d3A9
   > balance:             99.9967165
   > gas used:            164175 (0x2814f)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0032835 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0032835 ETH


2_deploy_contracts.js
=====================

   Deploying 'ConvertLib'
   ----------------------
   > transaction hash:    0x159f2f1847048e852c930c2501145a137ab33c331758f4a9501e5d32298e4fae
   > Blocks: 0            Seconds: 0
   > contract address:    0xF08D6FDd2fdf3c9736bea84BC36f1c36693C1d94
   > block number:        3
   > block timestamp:     1656421821
   > account:             0xC024C85b37732F6Ed8a4a382b0Fe83A6B837d3A9
   > balance:             99.99396028
   > gas used:            95470 (0x174ee)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0019094 ETH


   Linking
   -------
   * Contract: MetaCoin <--> Library: ConvertLib (at address: 0xF08D6FDd2fdf3c9736bea84BC36f1c36693C1d94)

   Deploying 'MetaCoin'
   --------------------
   > transaction hash:    0x2156dd4d6c3b87cdae84fad21eaae9040052e01cc190074f35ae269a993c10cb
   > Blocks: 0            Seconds: 0
   > contract address:    0x0F0777f012649176dD61721e47e1939b9CeEA61e
   > block number:        4
   > block timestamp:     1656421821
   > account:             0xC024C85b37732F6Ed8a4a382b0Fe83A6B837d3A9
   > balance:             99.98822898
   > gas used:            286565 (0x45f65)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0057313 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0076407 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.0109242 ETH


```


## truffle控制台



```
 $ truffle console
truffle(ganache)> let instance = await MetaCoin.deployed()
undefined
truffle(ganache)> let accounts = await web3.eth.getAccounts()
undefined
truffle(ganache)>  web3.eth.getAccounts()
[
  '0xc9b8033F35d74860527F4d30da6eC07479F041a0',
  '0xBe51e8fFC491DcD7bF3b7A28BBB372CB432aA2C9',
  '0x155Feb3Cf25F1ea0808FD1726EF0D2D206EA14e1',
  '0x4C21280Df01FFF6a4699325455E527484fe8dBd8',
  '0xD797931134C7B20B74AcCB1a91B13B2f4F33a06F',
  '0x4405E0BCA813f55a39be649B2b0e7463F5A55051',
  '0x160C084A23Dc0bA7EFACF4806F27667a239a095B',
  '0x32f92952628a442586eAFB215b780E8D3ded977a',
  '0x7784Cf9Df02cC21c90faC7641E06Be9eFF3B4f70',
  '0x495ccf4e9612837719673C3da2061054e301685A'
]
truffle(ganache)> (await web3.eth.getAccounts())[0]
'0xc9b8033F35d74860527F4d30da6eC07479F041a0'

truffle(ganache)> instance.sendCoin(accounts[1], 500)
{
  tx: '0x3db683da712a9862c3ada85ade2de57c0a7e2dcf76e672f435d9003a128d9862',
  receipt: {
    transactionHash: '0x3db683da712a9862c3ada85ade2de57c0a7e2dcf76e672f435d9003a128d9862',
    transactionIndex: 0,
    blockHash: '0x5835e6c517cdca64efc55314d07c544de20212f78154f8ed6662364fb9772a27',
    blockNumber: 1,
    from: '0xc9b8033f35d74860527f4d30da6ec07479f041a0',
    to: '0x0f0777f012649176dd61721e47e1939b9ceea61e',
    gasUsed: 21584,
    cumulativeGasUsed: 21584,
    contractAddress: null,
    logs: [],
    status: true,
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    rawLogs: []
  },
  logs: []
}
truffle(ganache)>

```