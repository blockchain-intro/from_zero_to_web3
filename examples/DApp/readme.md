# DAPP

## 需求及设计
参考
1. https://segmentfault.com/a/1190000040688693
2. https://learnblockchain.cn/2019/12/20/vue-dapp

## 实现

- backend：虚拟各个账户（100ETH），转账给author.adderss。最低转账额度随公式变化。后台可查各账户的余额。
- frontend：刷新网页，点击众筹，开启MetaMask并获取当前在线账户，向后台服务发起转账操作。持续调取author和当前账户状态，刷新页面。


## step by step cli

### requirements

- 安装vue：`npm install -g @vue/cli`
- 初始化前端工程：`vue create crowdfunding`
- truffle初始化：`truffle init`
- 创建.sol并编译：`truffle compile`，注意truffle-config.js设置的truffle compiler的版本


### 测试

- 启动私链：`ganache-cli -h 127.0.0.1 -p 8545 -i 5777`
- 绑定metamask：`name、url、链id`
- 执行智能合约：`truffle compile、truffle migrate`
- 测试服务：`npm run serve`
- 后台验证：`truffle console`
- 前台验证：web

### QA

1. codespace设置port public visibility
2. web页面自动调用MetaMask在线账号
   1. 导入私链模拟账号，向author address转账测试
   2. 后台验证
