const { generateUniqueId } = require('../utils/utils');

// Resto do código do controlador

const sales = [];

function createSale(req, res) {
  const { product, quantity, price } = req.body;
  const sale = {
    id: generateUniqueId(),
    product,
    quantity,
    price
  };
  sales.push(sale);
  return res.status(201).json(sale);
}

function getSales(req, res) {
  return res.json(sales);
}

module.exports = {
  createSale,
  getSales
};

