 const saveProducts = require('../models/saveProductsModels');
 const products = require('../models/productModels');


 const saveProduct = async(req,res)=>{
        const {userId, productId} = req.body;
        try{
            const productSaved = await saveProducts.findOne({userId:userId})
            
            if(productSaved){
                let savedlist = [];
                console.log(productSaved)
                productSaved.savingList.forEach((item)=>{
                    savedlist.push(item);
                })

                if(!savedlist.includes(productId)){
                    savedlist.push(productId);
                    let savedlistArray = {
                        savingList: savedlist
                    }

                    const updatedList = await saveProducts.updateOne(productSaved, savedlistArray,{new:true});
                    console.log(updatedList);
                    return res.status(200).json({success:true, statusCode:200, message:"updated successfully", data:productSaved});
                }else{
                    return res.status(404).json({success:false, statusCode:300, message:"Already saved"});
                }
            }else{ 
                const data = {
                    userId : userId,
                    savingList : productId
                }
                const saveProduct = await saveProducts.create(data);
                console.log(saveProduct);
                
                return res.status(200).json({success : true, statusCode : 200, message:"Product saved successfully"});
            }
        }catch(err){
            return res.status(500).json({success : false, statusCode :500, message: err.message});
        }
        
 } 


 const getsavedProduct = async(req,res)=>{
    const {userId} = req.query;
    try {
        console.log(userId);
        const savedProduct = await saveProducts.findOne({userId:userId})
        return res.status(200).json({success :true, statusCode : 200, message:"All saved products", dataObject : savedProduct});

    }catch(err){
        return res.status(404).json({success : false, statusCode :404, message: err.message});
    }
 }

 module.exports = {saveProduct,getsavedProduct};