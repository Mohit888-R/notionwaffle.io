const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({
    username: {
        type: 'string',
        required: true
    },
    email: { 
        type: 'string',
        required: true 
    },
    password: { 
        type: 'string', 
        required: true 
    },
    userId : {
        type: 'string'
    }
})

module.exports = new mongoose.model('UserSchema', UserSchema);