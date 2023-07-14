const express = require('express');
const router = express.Router();
const {postProduct, getProducts, getProductById, updateProduct} = require('../controllers/ProductController');


router.post('/postProducts',postProduct);
router.get('/getProductById',getProductById);
router.get('/getProducts', getProducts); 
router.put('/updateProduct', updateProduct);

module.exports = router;
