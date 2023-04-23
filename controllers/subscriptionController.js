const subscription = require('../models/subscriptionModels');

const SubScription = async(req,res)=>{
    
    try{
        const {email} = req.body;
        const mail = await subscription.findOne({email});
        
        if(mail){
            return res.json({success: false,message:"Email is already registered.", statusCode:300})
        }else{
            const mail2 = await subscription.create({email});
            return res.json({success: true,message:"Successfully registered", mail2,statusCode: 200});
        }
    }catch(err){
        res.json({success:false, message:err.message,statusCode:500})
    }
}

module.exports = {SubScription}