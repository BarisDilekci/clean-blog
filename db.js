// db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/Blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Uygulamayı sonlandır
  }
};

module.exports = connectDB;
