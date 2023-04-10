const mongoose = require('mongoose');

const TestimonialSchema = mongoose.Schema({
    username:{
        type:'String'
    },
    rating:{
        type:'String'
    },
    description:{
        type:'String'
    }
})

module.exports = new mongoose.model("Testimonial",TestimonialSchema);