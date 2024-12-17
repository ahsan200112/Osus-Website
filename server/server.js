// In your backend (server.js)
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const pricingRoutes = require("./pricing/routes/pricingRoutes");
const cors = require('cors');


dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

// Use the pricing routes for the '/api/pricing' path
app.use("/api/pricing", pricingRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Server Error",
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
