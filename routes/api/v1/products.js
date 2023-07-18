const express = require('express');
const router = express.Router();


const productController = require('../../../controllers/api/v1/products_controller');

let bodyParser = require('body-parser').json();


router.get('/products', productController.getProducts);
router.post('/products/create', bodyParser,productController.createProduct);
router.delete('/products/:id', productController.deleteProduct);

router.post('/products/:id/update_quantity', productController.updateQuantity);

module.exports = router;