const express = require('express');
const router = express.Router();
const {SubScription} = require('../controllers/subscriptionController');

router.post('/subscribe',SubScription);


module.exports = router;
