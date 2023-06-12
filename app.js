const express = require('express');
const saleRoutes = require('./src/routes/saleRoutes');

const app = express();
const port = 3000;

// Configurar o uso de middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar as rotas
app.use('/', saleRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
