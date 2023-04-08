const express = require('express');
const router = express.Router();
const {ReviewWrite} = require('../controllers/reviewController');

router.post('/reviewwrite',ReviewWrite);


module.exports = router;
