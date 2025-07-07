const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('MongoDB connection is successful');
});

connection.on('error', (error) => {
  console.error('Error in MongoDB connection:', error);
});

module.exports = mongoose;
