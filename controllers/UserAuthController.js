const userAuth = require('../models/userAuthModels');
const { v4: uuidv4 } = require('uuid');


const Register = async(req,res)=>{
    const {username, email, password, userId} = req.body;
    try{
        // email exists in the database
        const MailExist = await userAuth.findOne({ email: email});
        if(MailExist){
            return res.status(300).json({success: false, statusCode : 300, message : 'Email already exists'})
        }
        const userid = uuidv4();

        const userData = await userAuth.create({ username : username, email: email, password: password, userId : userid});
        
        return res.status(200).json({success: true, statusCode :200, message : userData});


    }catch(err){
        res.status(400).json({success:false,statusCode : 400, message : err.message});
    }
}

const Login = async (req,res)=>{
    const {email,password} = req.body;

    try{
        const MailExist = await userAuth.findOne({ email: email, password: password})
        const userData  = {email : email, password : password};

        if(MailExist){
            res.status(200).json({success: true, statusCode :200, message: userData});
        }  else{
            res.status(300).json({success: false, statusCode :301, message: 'User Not Found!!!'});
        }      

    }catch(err){
        res.status(400).json({success:false, statusCode : 404, message : err.message});
    }
}

module.exports = {Register,Login};