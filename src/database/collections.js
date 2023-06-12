const mongoose = require('mongoose');

// Definir o esquema do documento
const SaleSchema = new mongoose.Schema({
  saleId: String,
  product: String,
  quantity: Number,
  price: Number,
});

// Definir o modelo com base no esquema
const SaleModel = mongoose.model('Sale', SaleSchema);

// Função para criar uma nova venda
async function createSale(saleData) {
  try {
    const sale = new SaleModel(saleData);
    await sale.save();
    console.log('Sale created:', sale);
    return sale;
  } catch (error) {
    console.error('Failed to create sale:', error);
    throw error;
  }
}

// Função para buscar todas as vendas
async function getAllSales() {
  try {
    const sales = await SaleModel.find();
    console.log('All sales:', sales);
    return sales;
  } catch (error) {
    console.error('Failed to fetch sales:', error);
    throw error;
  }
}

module.exports = {
  createSale,
  getAllSales,
};
