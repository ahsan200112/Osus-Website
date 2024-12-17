// src/api/pricingApi.js

import axios from "axios";

const API_URL = "http://localhost:5000/api/pricing"; // Update the base URL if necessary

export const getPricingPlans = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching pricing plans", error);
    return [];
  }
};

export const createPricingPlan = async (plan) => {
  try {
    const response = await axios.post(API_URL, plan);
    return response.data;
  } catch (error) {
    console.error("Error creating pricing plan", error);
  }
};

export const updatePricingPlan = async (id, plan) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, plan);
    return response.data;
  } catch (error) {
    console.error("Error updating pricing plan", error);
  }
};

export const deletePricingPlan = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting pricing plan", error);
  }
};
