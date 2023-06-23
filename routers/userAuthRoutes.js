const express = require('express');
const router = express.Router();
const {Register,Login} = require('../controllers/UserAuthController');

router.post('/register', Register);
router.post('/login',Login);

module.exports = router;