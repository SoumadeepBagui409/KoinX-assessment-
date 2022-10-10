const express = require('express');
const router = express.Router();
const etherToDatabase = require('../utils/etherToDatabase');
const fetchTransaction = require('../utils/fetchTansaction');
const userTranzact = require('../utils/transactionToDatabase');
const calculateBalance = require('../utils/balanceCaculator');
const ETHPrice = require('../model/ETHCost');

let firstETHprice = true;
if(firstETHprice){
    etherToDatabase();
    firstETHprice = false;
}
setInterval(etherToDatabase,600000);

router.get('/userInfo/:userAddress',(req,res)=>{
    const userAddress = req.params.userAddress;
        fetchTransaction(userAddress,(error,data)=>{
            if(error){
                res.send(error);
            }else{
                userTranzact(data,userAddress);
                res.send(data);
            }
        });
})

router.get('/userBalance/:userAddress',(req,res)=>{
    const {userAddress} = req.params;
    calculateBalance(userAddress,async(error,data)=>{
        if(error){
            res.send(error);
        }else{
            const currEtherValue = await ETHPrice.findOne({});
            res.send({
                data:data,
                etherPrice:currEtherValue.ethPrice.toString()
            });
        }
    })

})
module.exports = router;