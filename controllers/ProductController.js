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


// somethign wrong with api call 
const getProductById = async (req, res) => {
    try {
        const productId = req.body;
        const getProduct = await products.findOne({productId:productId});
        console.log("getproduct : ",getProduct);
        if (getProduct.length < 0) {
            return res.status(404).json({ success: false, statusCode: 404, message: "data not found" });
        } else {
            return res.status(200).json({ success: true, statusCode : 200, message: "data found", data : getProduct });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const updateProduct = async (req, res) => {
    try {
    //   const filter = { price : {$in : ["0"]} };
        const filter = {productId: "64a0423faa8c4292b9479397"}
    const newimgUrl = "FImg14";

      const update = { $unset: { templateName: newimgUrl } };
    const result = await products.updateMany(filter,update);
          console.log(result, filter);
          res.json({result});
    } catch (error) {
      console.log(error.message);
    }
  };
  

module.exports = { postProduct, getProducts, getProductById, updateProduct }