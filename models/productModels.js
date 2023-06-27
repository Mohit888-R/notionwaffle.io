const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productId : {
        type : 'string',
        required: true
    },
    // imgUrl : {
    //     type : 'string',
    //     required: true
    // },
    categoryName : {
        type : 'string',
        required: true
    },
    templateName : {
        type : 'string',
        required: true
    },
    description : {
        type : 'string',
        required: true
    },
    price : {
        type : 'string',
        required: true
    },
    videoLink : {
        type: [{
            type: 'String',
            required: true
        }],
        required: true
    },
    aboutTemplate : {
        type : 'string',
        required: true
    }    
});

module.exports = new mongoose.model('ProductSchema', products);