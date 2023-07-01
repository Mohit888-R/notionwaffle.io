const express = require('express');
const router = express.Router();
const {postProduct, getProducts, getProductById} = require('../controllers/ProductController');


router.post('/postProducts',postProduct);
router.get('/getProductById/:id',getProductById);
router.get('/getProducts', getProducts); 

module.exports = router;
