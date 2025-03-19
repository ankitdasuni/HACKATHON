// importing express framework
const express = require("express");
// creating instance 
const app = express()
//connecting to mongoDB
require('dotenv').config()
const DBconfig = require('./config/dbConfig.js')
// creating port 
const port = process.env.PORT || 5000; // 5173 is  active with frontend 

//testing the mmongoDB connection
// console.log(process.env.MONGO_URL)
app.listen(port , () => console.log(`nodeServer started at  ${port}`))
