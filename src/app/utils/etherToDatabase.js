const fetchETH = require('./fetchEthPrice');
const ETHDatabase = require('../model/ETHCost');

const fetchETHPrice = ()=>{
    fetchETH(async(error,data)=>{
        if(error){
            console.log(error);
        }else{
            try{
                const val = await ETHDatabase.findOne({});
                if(val==null){
                    const value = new ETHDatabase({
                        ethPrice: data.ethereum.inr
                    })
                    await value.save();
                }else{
                    val.ethPrice = data.ethereum.inr;
                    await val.save();
                }
            }catch(err){
                console.log(err);
            }
        }
    })
}


module.exports = fetchETHPrice;