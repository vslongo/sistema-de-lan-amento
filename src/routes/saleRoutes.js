const express = require('express');
const saleController = require('../controllers/SaleController');

const router = express.Router();

router.post('/sales', saleController.createSale);
router.get('/sales', saleController.getSales);

module.exports = router;
