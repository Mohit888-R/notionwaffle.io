const mongoose = require('mongoose');

const TestimonialSchema =new mongoose.Schema({
    username:{
        type:String
    },
    rating:{
        type:String
    },
    description:{
        type:String
    },
    time:{
        type:String
    }
})

module.exports = new mongoose.model("Testimonial",TestimonialSchema);