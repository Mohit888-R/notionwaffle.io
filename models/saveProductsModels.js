const mongoose = require("mongoose");

const saveProductSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  savingList: [
    {
      productId: {
        type: String, 
      },
      templateName:{
        type: String,
      },
      ImgUrl: {
        type: String,
      },
      categoryName: {
        type: String,
      },
      price: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("saveProducts", saveProductSchema); 
