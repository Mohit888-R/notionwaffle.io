const mongoose = require('mongoose');
require('dotenv').require;

const connect = ()=>{
    console.log("database is connected server");
    return mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true,useUnifiedTopology:true});
}

module.exports = {connect}