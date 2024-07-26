const express = require('express');
const router = express.Router();
const { getOrders, addOrder, updateOrderStatus, deleteOrder } = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getOrders);


router.post('/', auth, addOrder);

router.put('/:id', auth, updateOrderStatus);


router.delete('/:id', auth, deleteOrder);

module.exports = router;
