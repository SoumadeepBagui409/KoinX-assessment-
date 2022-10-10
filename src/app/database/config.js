const mongoose = require('mongoose');
const databaseConfig = mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("database not connected sucessfully due to "+err);
})

module.exports = databaseConfig;