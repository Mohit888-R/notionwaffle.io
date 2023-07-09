const express = require('express');
require('dotenv').config();
const cors = require('cors')
const port = process.env.PORT;


const corsOptions = {
    origin: [
        "http://localhost:3000"
    ],
};

const app = express();
app.use(cors())
const bodyParser = require('body-parser');
const SubScription = require('./routers/subscriptionRouter');
const Testimonial = require('./routers/testimonialRouter');
app.use(cors(corsOptions)); 
const {connect} = require("./db/connection");
const Razorpay = require('razorpay');
const PaymentRoutes = require('./routers/paymentRoutes')
const userAuthRoutes = require('./routers/userAuthRoutes');
const productRoutes = require('./routers/ProductRoutes');
const saveProductRoutes = require('./routers/saveProductRoutes');


app.get('/',(req,res)=>{
    res.send("Welcome!");
})

app.get('/getKey',(req,res)=>{
    return res.status(200).json({
        success: true,
        key: process.env.RAZORPAY_API_KEY  
    })
})

connect();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.use('/api/v1',SubScription);

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });
  

app.use('/api/v1/testimonial',Testimonial);
app.use('/api/v1/payment',PaymentRoutes);
app.use('/api/v1/authentication',userAuthRoutes);
app.use('/api/v1/product',productRoutes);
app.use('/api/v1/saveproduct',saveProductRoutes)

app.get('/api/v1/getKey',(req, res)=>{
    return res.status(200).json({
        success:true,
        key:process.env.RAZORPAY_API_KEY
    })
})

app.listen(port, ()=>{
    console.log('listening on port',port);
})

module.exports = {instance};