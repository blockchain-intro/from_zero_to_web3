# infura.io

对于Infura简言之就是一个`Web3`供应商，背后是负载均衡的`API`节点集群。因此Infura就是一个可以让你的 DApp 快速接入以太坊的平台，不需要本地运行以太坊节点。除此之外，Infura 还可以很方便地接入 IPFS，进行去中心化存储。为跨行业的开发人员，DApp 团队和企业提供了一套工具，可将其应用程序连接到以太坊网络和其他去中心化平台。
Infura 本质上为任何应用程序提供了必要的工具，使其可以立即在以太坊上开始开发，而无需自己运行复杂的基础架构。**Infura为所有使用以太坊区块链的开发人员提供了连接。**

>低成本使用infrua，开发者无需本地使用geth，ganache-cli等启动blockchain，节省开发成本，方便开发者接入ethereum



## 简介

- `infura.ipynb`：使用web3.py实现合约编译部署与应用的统一pipeline
- `truffle_infura`：使用truffle部署合约，并用web3.py测试
- 此外就是使用remix，或者搭建私链测试

无论使用哪种方式部署合约，都需要提前准备测试币，实现交易后完成部署。

## tutorial

1. 注册申请`infura.io`的账号，并创建工程获取project_id，作为`provider`；
2. 合约部署与测试
  -. 使用`truffle`部署到`ropsten`或其他测试网络，使用`web3.py`或`web3.js`测试。
  -. **或者**基于`web3.py`：
    1. 使用`solx`编译合约，并执行初次交易来部署
    2. 继续使用`web3.py`接入合约`functions`测试交易

### 合约使用

1. author编译合约得到bytecode，并通过交易部署合约，返回合约地址。
2. 其他cli通过合约的bytecode与abi向远程进行交易，得到合约地址（仅对当前用户唯一，地址与author不同）
3. 其他cli通过当前合约地址初始化本地contract实例


## 合约测试的方式
- 合约开发（solidity）
- 合约部署（remix、| infura、geth、ganache）
- 测试（remix-js、|web3）

