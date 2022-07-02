const Web3 = require("web3");
const ganache = require("ganache");

// Ganache创建provider

var provider = ganache.provider()

var web3 = new Web3(provider);


web3.eth.getAccounts().then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err)
});








