const mongoose = require('mongoose');

const subScriptionSchema = mongoose.Schema({
    email:{
        type:'String',
        // trim:true,
        // lowercase:true,
        // unique:true,
        // required:['Please Enter a valid email address']
    }
});

module.exports =new mongoose.model("subScriptionSchema",subScriptionSchema);