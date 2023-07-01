const mongoose = require('mongoose');

const saveProductSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
   savingList : {
    type : [{type: String,
    required: true}],
    required: true
   }
});

module.exports = new mongoose.model('saveProducts',saveProductSchema);