const Web3 = require('web3');
var EthereumTx = require('ethereumjs-tx');
const exit_ABI = require('./exit.js')
const erc_721=require('./erc721')
const Constant = require('./gameConstant')

let privateKey = Constant.privateKey;

const web3 = new Web3('https://polygon-rpc.com');

const tokenAddress='0xdc0479cc5bba033b3e7de9f178607150b3abce1f'
const exitADDress='0x8d528e98A69FE27b11bb02Ac264516c4818C3942'

var TokenContract =new web3.eth.Contract(erc_721,tokenAddress);
var exitContract =new  web3.eth.Contract(exit_ABI,exitADDress);

async function init(privateKey){
 
    var myaddress=web3.eth.accounts.privateKeyToAccount(privateKey).address;


    console.log("当前执行地址[%s]",myaddress)
    var UNICORNS_total=await TokenContract.methods.balanceOf(myaddress.toString()).call()

    console.log("[%s]一共[%s]独角兽等待获取下一步ID",myaddress,UNICORNS_total)
        var arr=[];
        for(var i=0;i<UNICORNS_total;i++){
        
            var UNICORNS_tokenID=await TokenContract.methods.tokenOfOwnerByIndex(myaddress,i).call()
            arr.push(UNICORNS_tokenID)
            console.log(arr)
        }
    
        if(arr.length>=1){
            console.log('Id获取成功[%s]',arr)
            var Nonce=await  web3.eth.getTransactionCount(myaddress, 'pending') 
            deposit(myaddress,arr,Nonce,privateKey)

        }else{
            console.log('钱包并没有独角兽放弃操作')
        }

    var desp_total=await exitContract.methods.numStaked(myaddress).call()
    console.log("[%s]一共[%s]独角兽等待获取下一步ID",myaddress,desp_total)
        var brr=[];
        for(var i=0;i<desp_total;i++){
            var desp_tokenID=await exitContract.methods.tokenOfStakerByIndex(myaddress,i).call()
            brr.push(desp_tokenID)
            console.log(brr)
        }
        
        if(brr.length>=1){
            console.log('取出Id获取成功[%s]怎在判断是否可以取出',brr)
          
            var Nonce=await  web3.eth.getTransactionCount(myaddress, 'pending') 
            talk(myaddress,brr,Nonce,privateKey )

        }else{
            console.log('存入合约没有独角兽放弃操作')
        }

        await sleep(30000)
   



}

async  function deposit (myaddress,arr,nonce,privateKey){
    for(var i=0;i<arr.length;i++){
        var tokenId=arr[i]
        var Gasvalue=await web3.eth.getGasPrice()
        console.log(Gasvalue)
        var transfer =TokenContract.methods.safeTransferFrom(myaddress,exitADDress,tokenId,'0x00');         
        var encodedABI=transfer.encodeABI();
        console.log(encodedABI);
        var tx = {
            to: tokenAddress,
            gas: '600000',
            nonce:nonce,
            gasPrice: Gasvalue,  
            data: encodedABI
          }; 
        nonce++
        web3.eth.accounts.signTransaction(tx, privateKey).then(signed => {
            var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
            tran.on('transactionHash', hash => {
              
                console.log('[%s][%]交易返回[%s]',myaddress,tokenId,hash);
              });
          
             
              
              tran.on('error', console.error);
    
        });

    }


} 


async  function talk (myaddress,arr,nonce,privateKey){
    for(var i=0;i<arr.length;i++){
    
        var tokenId=arr[i]
        var exit_time= await exitContract.methods.unstakesAt(tokenId).call()
        console.log("[%s]可以取出时间是[%s]",tokenId,exit_time)
        var timestamp = Math.round(new Date() / 1000)
        if(timestamp>=exit_time){

       
        var Gasvalue=await web3.eth.getGasPrice()
        console.log(Gasvalue)
        var transfer =exitContract.methods.exitForest(tokenId);         
        var encodedABI=transfer.encodeABI();
        console.log(encodedABI);
        var tx = {
            to: '0x8d528e98A69FE27b11bb02Ac264516c4818C3942',
            gas: '600000',
            nonce:nonce,
            gasPrice: Gasvalue,  
            data: encodedABI
          }; 
        nonce++
        web3.eth.accounts.signTransaction(tx, privateKey).then(signed => {
            var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
            tran.on('transactionHash', hash => {         
                console.log('[%s][%s]取出交易返回[%s]',myaddress,tokenId,hash);
              });             
              tran.on('error', console.error);
    
        });
    }else{
        console.log("[%s]不到时间距离时间[%s]s",tokenId,exit_time-timestamp)
    }
    }


} 


async function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
};



async function loop() {
    console.log('当前脚本版本：V1.0.0');
    for (let i = 0; i < privateKey.length; i++)
        try {
            console.log(privateKey[i])
            oneLoop(privateKey[i])
        } catch (e) {
            console.log('最外层错误：', e);
        }
}
loop()
async function oneLoop(privateKey) {
    
    for (;;) {
        try {
         
        
            await init(privateKey);
        } catch (e) {
            console.log(e)
        }
        await sleep(30000)
    }
}