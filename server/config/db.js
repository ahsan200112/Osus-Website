// In your backend (config/db.js)
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;