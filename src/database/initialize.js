const mongoose = require('mongoose');

async function initializeDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/sistema-lancamento', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const connection = mongoose.connection;
    const collectionExists = await connection.db.listCollections({ name: 'sales' }).hasNext();

    if (!collectionExists) {
      await connection.db.createCollection('sales');
      console.log('Collection "sales" created');
    } else {
      console.log('Collection "sales" already exists');
    }

    connection.close();
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
}

initializeDatabase();
