const mongoose = require('mongoose');

const db = async () =>{
   try{
        mongoose.connect("mongodb://localhost:27017/scatch");
        console.log("database connected");
   }catch(err){
        console.log("DB connection error: " , err);
        process.exit(1);
   } 
}

module.exports = db;