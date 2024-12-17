const express = require("express");
const router = express.Router();
const pricingController = require("../controllers/pricingController");

// Get all pricing plans
router.get("/", pricingController.getPricingPlans);

// Create a new pricing plan (with validation)
router.post("/", pricingController.validatePricing, pricingController.createPricingPlan);

// Update a pricing plan by ID (with validation)
router.put("/:id", pricingController.validatePricing, pricingController.updatePricingPlan);

// Delete a pricing plan by ID
router.delete("/:id", pricingController.deletePricingPlan);

module.exports = router;
