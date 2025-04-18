const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb://localhost:27017/";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error("MongoDB Unconnected");
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
