const { MongoClient } = require('mongodb');

// Configurações da conexão
const uri = 'mongodb://localhost:27017'; // URI de conexão com o MongoDB
const dbName = 'sistema-de-lancamento'; // Nome do banco de dados

// Função para conectar ao MongoDB
async function connectToMongo() {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Conectado ao MongoDB');
    return client.db(dbName);
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Encerra a execução do aplicativo em caso de erro
  }
}

module.exports = connectToMongo;
