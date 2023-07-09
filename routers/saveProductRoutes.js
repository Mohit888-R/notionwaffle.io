const express = require('express');
const router = express.Router();
const {saveProduct,getsavedProduct} = require('../controllers/saveProductController');

router.post('/saveProduct',saveProduct);
router.get('/getsavedProduct',getsavedProduct);

module.exports = router;