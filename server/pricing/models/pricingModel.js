// src/models/PricingPlan.js
const mongoose = require("mongoose");

const pricingPlanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  monthlyPrice: { type: Number, required: true },
  yearlyPrice: { type: Number, required: true },
  features: [
    {
      text: { type: String, required: true },
      available: { type: Boolean, required: true },
    },
  ],
});

const PricingPlan = mongoose.model("PricingPlan", pricingPlanSchema);
module.exports = PricingPlan;
