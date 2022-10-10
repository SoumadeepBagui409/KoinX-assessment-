const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    accountNumber:String,
    transactions: []
});

module.exports = mongoose.model('UserTranzaction',userSchema);