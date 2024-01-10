// cartRoutes.js
const express = require('express');
const cartController = require('../controllers/cartController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/cart', authenticate, cartController.getCart);
router.post('/cart/add', authenticate, cartController.addToCart);
router.put('/cart/update/:productId', authenticate, cartController.updateCartItem);
router.delete('/cart/remove/:productId', authenticate, cartController.removeFromCart);

module.exports = router;
