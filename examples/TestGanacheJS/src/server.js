// 引入fs模块，用于读写文件
const fs = require('fs');

// 引入ganache-cli用于提供测试服务
const ganache = require("ganache-cli");

// 引入circular-json用于格式化输出对象
const CircularJSON = require('circular-json');

var server = ganache.server();
// 监听7545端口
server.listen(7545, function(err, blockchain) {
      console.log(err);
    // console.log(blockchain)
    // fs.writeFileSync('blockchain.txt', CircularJSON.stringify(blockchain));
    // 输出ganache-cli中区块链数据结构及内容到blockchain文件中
      fs.writeFileSync('./examples/TestGanacheJS/blockchain.txt', CircularJSON.stringify(blockchain, null, '\t'));
    // 打印钱包助记词
    console.log(blockchain.mnemonic);
});
