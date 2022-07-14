# infura.io

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
