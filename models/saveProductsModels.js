const mongoose = require('mongoose');

const saveProductSchema = new mongoose.Schema({
    userId : {
        type: 'string',
        required: true
    },
    title : {
        type : 'string',
        required: true
    },
    category : {
        type: 'string',
        required:true
    },
    description : {
        type: 'string',
        required: true
    },
    price : {
        type: 'string',
        required: true
    }
});

module.exports = new mongoose.model('saveProducts',saveProductSchema);