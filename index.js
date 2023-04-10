const express = require('express');
require('dotenv').config();
var cors = require('cors')
const port = process.env.PORT;


const corsOptions = {
    // origin: "https://userregisrationfrontend.herokuapp.com",
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

app.get('/',(req,res)=>{
    res.send("Welcome!");
})

connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.use('/api/v1',SubScription);

app.use('/api/v1/testimonial',Testimonial);

app.listen(port, ()=>{
    console.log('listening on port',port);
})