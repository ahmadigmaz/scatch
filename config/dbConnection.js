const mongoose = require('mongoose');
const config = require('config');
const debuger = require('debug')("dev:dbConnection");

const db = async () =>{
   try{
        mongoose.connect(`${config.get("MONGODB_URL")}/scatch`);
        debuger("database connected");
   }catch(err){
        debuger("DB connection error: " , err);
        process.exit(1);
   } 
}

module.exports = db;