const mongoose = require('mongoose');

const saveProductSchema = new mongoose.Schema({
    userId : {
        type: 'string',
        required: true
    },
   savingList : {
    type : [{type: 'string',
    required: true}],
    required: true
   }
});

module.exports = new mongoose.model('saveProducts',saveProductSchema);