const request = require('postman-request');

const fetchTransaction = (userAddress,callback)=>{
    const url = "https://api.etherscan.io/api?module=account&action=txlist&address="+userAddress+"&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey="+process.env.ETHERSCANAPI;
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("unable to connect with services please check you connection",undefined);
        }
        else if(response.body.status==0){
            callback(response.body.message,undefined);
        }else{
            callback(undefined,response.body.result)
        }
    })
}

module.exports = fetchTransaction;