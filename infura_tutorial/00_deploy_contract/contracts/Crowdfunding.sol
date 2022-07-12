pragma solidity >=0.6.0 <0.7.0;
contract Crowdfunding {
    // 创作者，公共可见
    address public author;
    // 参与金额
    mapping(address => uint) public joined;
    // 众筹目标
    uint constant Target = 0.8 ether;
    // 众筹截止时间，公共可见
    uint public endTime;
    // 记录当前众筹价格
    uint public price = 0.2 ether;
    // 作者提取资金之后，关闭众筹
    bool public closed = false;
    // 部署合约时调用构造器，初始化作者及众筹结束时间
    constructor() public {
        author = 0xA1D91D7b6Bd771c53eF7B7d12805368B46E52467;
        endTime = now + 30 days;
    }
    // 更新价格，普通链上内部函数定义
    function updatePrice() internal {
        uint rise = address(this).balance / 1 ether * 2 ether;
        price = 2 ether + rise;
    }
    // 用户向合约转账时，触发的回调函数
    receive() external payable {
        require(now < endTime && !closed , "众筹已结束"); //用error类型check
        require(joined[msg.sender] == 0, "你已经参与过众筹");
        require(msg.value >= price, "出价太低了");
        joined[msg.sender] = msg.value;
        updatePrice();
    }
    // 作者提取资金，供web3.js调用
    function withdrawFund() external {
        require(msg.sender == author, "你不是作者");
        require(address(this).balance >= Target, "未达到众筹目标");
        closed = true;
        msg.sender.transfer(address(this).balance);
    }
    /*
    // 赎回
    withdraw() {
      console.log('close:',this.closed);
      this.crowdFund.withdraw({ // 合约external函数调用
        from: this.account
      }).then(() => {
        this.getCrowdInfo()
      });
    },*/


    // 读者赎回资金，供web3.js调用
    function withdraw() external {
        require(now > endTime, "还未到众筹结束时间");
        require(!closed, "众筹达标， 众筹资金已提取");
        require(Target > address(this).balance, "众筹达标，你没法提取资金");
        msg.sender.transfer(joined[msg.sender]);
    }
    /*
    // 提取资金
    withdrawFund() {
      this.crowdFund.withdrawFund({  // 合约external函数调用
        from: this.account
      }).then(() => {
        this.getCrowdInfo()
      })
    },
    */
}