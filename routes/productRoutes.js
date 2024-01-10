// productRoutes.js
const express = require('express');
const productController = require('../controllers/productController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', authenticate, productController.addProduct);
router.put('/products/:id', authenticate, productController.updateProduct);
router.delete('/products/:id', authenticate, productController.deleteProduct);
router.post('/products/uploadImage', authenticate, productController.uploadImage);

module.exports = router;
