
require('dotenv').config({path: process.cwd()+'/.env'});
const express = require('express');
const app = express();
const databaseConfig = require('./app/database/config')
const fetchTansaction = require('./app/routes/UserInfo');

databaseConfig;
app.use(express.urlencoded({extended: true}));
app.get('/',(req,res)=>{
    res.send("/userInfo");
})
app.use(fetchTansaction);
app.get('/*',(req,res)=>{
    res.send("please check the request made, prehaps problem in link detected");
})
app.listen(process.env.PORT || 3000,()=>{
    console.log("connected to server");
})