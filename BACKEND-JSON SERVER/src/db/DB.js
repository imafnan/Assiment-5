const mongoose = require('mongoose');

const connectDB = async () => {
  // database connection
  mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('DB connected'))
    .catch(err => console.error('DB connection error:', err));
};

module.exports = connectDB;
