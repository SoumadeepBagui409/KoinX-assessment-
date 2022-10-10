const request = require('postman-request');

const fetchETH = (callback)=>{
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&amp;vs_currencies=inr";
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("unable to connect to the services, please check your network connection.",undefined);
        }
        callback(undefined,response.body);
    })
} 

module.exports = fetchETH;
