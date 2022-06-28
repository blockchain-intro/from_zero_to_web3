
// 引入web3.js依赖
const Web3 = require("web3");

// 引入ganache-cli依赖
const ganache = require("ganache-cli");


// 使用Ganache创建一个provider给web3.js使用
var web3 = new Web3(ganache.provider());

// getAccounts获取账户信息，返回的是一个Promise，成功执行then，失败执行catch
web3.eth.getAccounts().then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err)
});


// output
// [
//     '0xEAe59eACc510f3ed1310a01B243845a971423027',
//     '0x210bc9DD42d7510C3c41D0b5ADE225Ce8C08bF96',
//     '0x335A1f8f46fc54aA879C14798b27186b640801b0',
//     '0x09dfF5FE063fff5cEc61cAE21e61Da68a210Ed11',
//     '0x82Ae76D65998De9AA760Ce41FA02489d3947b383',
//     '0x34850eBf7072877132ada9c9E93A35545874B95C',
//     '0x0265812539d19975CE9e1f15A3554568477383dC',
//     '0x432b84741216a05Ba3D3b7450bB70bC9BbF7c12a',
//     '0x18aE2D8C66579ba2C367257Fabd1DC966BF51dE6',
//     '0xd1a44468d9Ec0474f281c162ED0F110f5db7C1bE'
//   ]