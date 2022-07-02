# from_zero_to_web3


## dev tutorial

1. geth创建私链
2. truffle编译部署智能合约
3. 前端web3.js调用MetaMask实现业务需求
4. 后端实时查询

## requestments


### geth

搭配github-codespace使用更香

```shell
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```

### web3.py

```shell
pip install -r requirements.txt

from solcx import install_solc

install_solc("v0.5.1")

```

