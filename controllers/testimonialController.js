const TestimonialModel = require("../models/testimonialModels");
const date = require('date-and-time');

const Testimonial = async(req,res)=>{
    try{
        const {username,rating,description} =req.body;
        const now = new Date();
        const pattern = date.compile('ddd, MMM DD YYYY');
        const time = date.format(now, pattern);
        console.log(time);
        const data  = await TestimonialModel.create({username,rating,description,time});
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
        const data = await TestimonialModel.find({rating:"5"});
        // console.log("Data",data);
        return res.json({success:true,data:data,statusCode:200});
    }catch(err){
        res.json({success:false,err:err.message,statusCode:500});
    }
}


module.exports = {Testimonial,GetAllTestimonial,topTestimonials};