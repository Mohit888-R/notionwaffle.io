const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
    },
    imgUrl: {
        type: [{
            type: 'String',
            required: true
        }],
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    templateName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    videoLink: {
        type: [{
            type: String,
            required: true
        }],
        required: true
    },
    aboutTemplate: {
        type: String,
        required: true
    }
});

ProductSchema.pre('save', async function (next) {
    this.productId = this._id;
    next();
});

module.exports = new mongoose.model('products', ProductSchema);