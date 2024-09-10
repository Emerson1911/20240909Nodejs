const express = require('express');
const router = express.Router();
const productController = require('../controllers/productcontroller');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductsById);
router.post('/', productController.createProducts);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
