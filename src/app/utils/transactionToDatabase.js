const UserTranzaction = require('../model/userDataBase');

const userTranzact = async(data,userAddress)=>{
    const UserTrans = await UserTranzaction.findOne({accountNumber:userAddress});
    if(UserTrans==null){
        const newTransaction = new UserTranzaction({
            accountNumber:userAddress,
            transactions:data
        });
        await newTransaction.save();
    }else{
        UserTrans.transactions = data;
        await UserTrans.save();  
    }
}

module.exports = userTranzact;