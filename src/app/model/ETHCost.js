const mongoose = require('mongoose');

const EthPriceSchema = mongoose.Schema({
    ethPrice: {
        type:Number,
        default: -1
    }
});

module.exports = mongoose.model('ETHPrice',EthPriceSchema);