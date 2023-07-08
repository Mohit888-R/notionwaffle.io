const products = require('../models/productModels');
const { ObjectId } = require('mongodb');


const postProduct = async (req, res) => {
    const { imgUrl, categoryName, templateName, description, price, videoLink, aboutTemplate } = req.body;
    try {
        const ProductMatch = await products.findOne({ imgUrl: imgUrl, templateName: templateName });

        if (imgUrl == '' || categoryName == '' || templateName == '' || description == '' || price == '' || videoLink == '' || aboutTemplate == '') {
            return res.status(204).json({
                success: false,
                statusCode: 204,
                message: 'Please Fill all required fields'
            })
        }

        if (ProductMatch) {
            return res.status(300).json({ success: false, statusCode: 300, message: 'Product already exists' })
        }


        const product = await products.create({ imgUrl, categoryName, templateName, description, price, videoLink, aboutTemplate });

        return res.status(200).json({ success: false, statusCode: 200, message: 'Product successfully added.', dataObject: product });

    } catch (err) {
        return res.status(404).json({ success: false, statusCode: 404, message: err.message });
    }
}


const getProducts = async (req, res) => {
    // const {imgUrl, categoryName, templateName, description, price, videoLink, aboutTemplate } = req.body;

    try {
        const productList = await products.find({});

        if (productList.length == 0) {
            return res.status(300).json({ success: false, statusCode: 300, message: 'Product not found' });
        }

        return res.status(200).json({ success: true, statusCode: 200, message: 'All products found', data: productList });

    } catch (err) {
        return res.status(404).json({ success: false, statusCode: 404, message: err.message });
    }
}



const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const getProduct = await products.findById(productId);
        if (!getProduct) {
            res.status(404).json({ success: false, statusCode: 404, message: "data not found" });
            return;
        } else {
            res.status(200).json({ success: true, statusCode : 200, message: "data found", data : getProduct });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const updateProduct = async (req, res) => {
    try {
    //   const filter = { price : {$in : ["59"]} };
        const filter = { imgUrl : "https://raw.githubusercontent.com/Mohit888-R/notionwaffle.io/main/assets/premiumNotionTemplate/img8.png"}
    //   const newImgUrl = "https://raw.githubusercontent.com/Mohit888-R/notionwaffle.io/main/assets/simpleNotionTemplate/img1.jpg";
    // const newImgUrl = "FImg4";
    const newtemplateName = "Social Media Kit";
      const update = { $set: { templateName: newtemplateName } };
          const result = await products.updateMany(filter,update);
          console.log(result, filter);
          res.json({result});
    } catch (error) {
      console.log(error.message);
    }
  };
  

module.exports = { postProduct, getProducts, getProductById, updateProduct }