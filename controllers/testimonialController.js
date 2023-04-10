const TestimonialModel = require("../models/testimonialModels");

const Testimonial = async(req,res)=>{
    try{
        const {username,rating,description} =req.body;

        const data  = await TestimonialModel.create({username,rating,description});
        console.log("data",data);
        return res.json({success:true,data:data,statusCode:200});
    }catch(err){
        res.json({success:false,err:err.message,statusCode:500});
    }
}

const GetAllTestimonial = async(req,res)=>{
    try{
        const data  = await TestimonialModel.find();
        const count = await TestimonialModel.count();
        const dataObject = [data,{Totalcounts:count}]
        return res.json({success:true,data:dataObject,statusCode:200});
    }catch(err){
        res.json({success:false,err:err.message,statusCode:500});
    }
}

const topTestimonials = async(req,res)=>{
    try{
        const data = await TestimonialModel.find({rating:"4"});
        // console.log("Data",data);
        return res.json({success:true,data:data,statusCode:200});
    }catch(err){
        res.json({success:false,err:err.message,statusCode:500});
    }
}


module.exports = {Testimonial,GetAllTestimonial,topTestimonials};