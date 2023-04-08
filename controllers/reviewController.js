const Reviews = require('../models/reviewsModels');
const { v4 : uuidv4 } = require('uuid');

const ReviewWrite = (req,res)=>{
    try{
        const {userUniqueId, name, stars, description} = req.body;
        userUniqueId = uuidv4();

        const matches = Reviews.findOne({userUniqueId});

        if(matches){
            return res.json({success: false, message:"User already exist",statusCode: 300});
        }else{
            const data = Reviews.create(userUniqueId, name, stars, description)
            return res.json({success: true,message:"Thanks for adding your review", dataObject:data ,statusCode:200});
        }
    }catch(err){
        return res.json({success:false, message:err.message,statusCode:500})
    }
}

module.exports = {ReviewWrite};