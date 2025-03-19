const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);
 
const connection = mongoose.connection;
//verify
connection.on('connected', ()=>{
    console.log('MongoDB is connected');
});

connection.on('error',(error)=>{
    console.log("Error in MongoDB Connection")
})
module.exports = mongoose;