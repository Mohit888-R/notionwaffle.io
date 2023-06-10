const Razorpay = require('razorpay');
const crypto = require("crypto");
const paymentDetailsSchema = require('../models/paymentDetailModels');

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});


const checkout = async (req, res) => {
    try {
        const amount = parseInt(req.body.amount);
        if(amount === undefined || amount <= 0){
          return res.status(200).json({
            success: true,
            order: order
          });
        }else{
          const options = {
            amount: (amount * 100),
            currency: "USD",
            // receipt: "order_rcptid_11"
          };

          const order = await instance.orders.create(options);
          console.log(order);
          
          return res.status(200).json({
            success: true,
            order: order
          });
          
        }
      
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        error: "An error occurred during checkout."
      });
    }
  };
  


const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    var expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest('hex');

    const isAuthenticated = expectedSignature === razorpay_signature;
    
    console.log(expectedSignature, " --------------   and -------------- ",razorpay_signature);

    if (isAuthenticated) {
        const paymentDetails = await paymentDetailsSchema.create({
            razorpay_order_id, razorpay_payment_id, razorpay_signature
        })
        console.log("stored detetails : ", paymentDetails);

        res.status(200).redirect(`http://localhost:3000/paymentsuccess/${razorpay_payment_id}`);
    } else {
        return res.status(400).json({ success: false });
    }
}

module.exports = { checkout, paymentVerification };