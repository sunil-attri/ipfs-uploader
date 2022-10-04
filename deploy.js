const Web3=require('web3')
const ABI=require('./abi/abi')
const BYTECODE=require('./bytecode/bytecode')


const web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
var Deploy =async()=>{

const myContract=new web3.eth.Contract(ABI)
await web3.eth.getAccounts()
.then(accounts=>{
    web3.eth.defaultAccount=accounts[0]
})
const bytecode=BYTECODE.object
await myContract.deploy({data:bytecode}).send({from:web3.eth.defaultAccount,gas: 1500000}).on('receipt',function(receipt){
    console.log(receipt.contractAddress)
    console.log(receipt)
})
}
Deploy()
