const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    userUniqueId: {
        type:String
    },
    username : {
        type:String
    },
    star:{
        type:Number
    },
    description:{
        type:String
    },
    date:{
        type:String,
        default:Date.now
    }
});

module.expport = new mongoose.model("Reviews",reviewSchema)