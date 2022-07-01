
# Truffle example


## ganache启动私链
`ganache-cli -h 127.0.0.1 -p 7545 -i 5777`


## 准备example
`truffle unbox metacoin`


## 编译与部署合约
1. 测试： `truffle test ./test/TestMetaCoin.sol`
2. 编译： `truffle compile`
3. 部署： `truffle migrate`



### truffle控制台
测试web3.API

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

```
日志详情`/MetaCoin/test_log.md`
