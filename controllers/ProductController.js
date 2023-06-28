const products = require('../models/productModels');
const { v4: uuidv4 } = require('uuid');

const postProduct = (req,res)=>{
    const {imgUrl, categoryName, templateName, description, price, videoLink, aboutTemplate } = req.body;
    try{
        const ProductMatch = products.matchProduct({imgUrl:imgUrl, templateName:templateName});

        if(imgUrl == '' || categoryName == '' || templateName == '' || description == '' || price == '' || videoLink == '' || aboutTemplate == ''){
            return res.status(204).json({
                success:false, 
                statusCode:204, 
                message : 'Please Fill all required fields'
            })
        }

        if(ProductMatch){
            return res.status(300).json({success:false,  statusCode : 300, message:'Product already exists'})
        }

        const userid = uuidv4();
        const product = products.create({userid, imgUrl,  categoryName, templateName, description, price, videoLink, aboutTemplate });
        
        return res.status(200).json({success:false, statusCode : 200, message:'Product successfully added.', data : product});

    }catch(err){
        return res.status(404).json({success:false, statusCode : 404, message: err.message});
    }
}


const getProducts = (req, res) => {
    const {imgUrl, categoryName, templateName, description, price, videoLink, aboutTemplate } = req.body;

    try{
        const productList = products.find();

        return res.status(200).json({success:true, statusCode:200,message:'All products found', data:productList});

    }catch(err){
        return res.status(404).json({success:false, statusCode : 404, message: err.message});
    }
}


const getProduct = (req,res)=>{
    const productid = req.params.productId;
    
    try{
        const productExists = products.findById({productid:productid});
        
        if(!productExists){
            return res.status(300).send({success:false, statusCode : 300, message: 'Product does not exist'})
        }

        const product = products.find();
        return  res.status(200).json({success:true, statusCode : 200, message: "Product exists", data : product})
    }catch(err){
        return res.status(404).json({success:false, statusCode:404, message:err.message});
    }
}


