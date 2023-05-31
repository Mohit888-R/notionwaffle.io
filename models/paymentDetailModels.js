const mongoose = require('mongoose');

const paymentDetailsSchema = new mongoose.Schema({
    razorpay_order_id: { type: 'string', required: true },
    razorpay_payment_id: { type: 'string', required: true },
    razorpay_signature: { type: 'string', required: true },
    created_at: { type: 'Date', Default: Date.now() }
})

module.exports = new mongoose.model('paymentDetailsSchema',paymentDetailsSchema);