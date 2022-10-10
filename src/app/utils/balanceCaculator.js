const userTranzaction = require('../model/userDataBase')

const totalBalance = async(userAddress,callback)=>{
    try{
        const userTransDB = await userTranzaction.findOne({accountNumber:userAddress});
        if(userTransDB==null){
            callback("notransaction for given address found ",undefined);
        }
        let balance = BigInt('0');
        for(let currTrans of userTransDB.transactions){
            if(currTrans.from===userAddress && currTrans.to!==userAddress){
                balance = balance - BigInt(currTrans.value);
            }
            else if(currTrans.to===userAddress && currTrans.from!==userAddress){
                balance = balance+BigInt(currTrans.value);
            }
        }
        callback(undefined,balance.toString());
    }catch(err){
        callback(err,undefined);
    } 
}

module.exports = totalBalance;