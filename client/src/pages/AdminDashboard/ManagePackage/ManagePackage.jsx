import React, { useState, useEffect } from "react";
import { getPricingPlans, createPricingPlan, updatePricingPlan, deletePricingPlan } from "../../../api/pricingApi";
import PricingTable from "../../../components/PricingByAdmin/PricingTable/PricingTable";
import AddEditPricingForm from "../../../components/PricingByAdmin/AddEditPricingForm/AddEditPricingForm";
import "./ManagePackage.css";

const ManagePackage = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState(null);

  useEffect(() => {
    fetchPricingPlans();
  }, []);

  // Fetch all pricing plans from the backend
  const fetchPricingPlans = async () => {
    const plans = await getPricingPlans();
    setPricingPlans(plans);
  };

  // Handle Add or Edit functionality
  const handleAddOrEdit = async (plan) => {
    if (currentPlan) {
      await updatePricingPlan(currentPlan._id, plan); // Update existing plan
    } else {
      await createPricingPlan(plan); // Create new plan
    }
    setCurrentPlan(null); // Reset form after submit
    fetchPricingPlans(); // Refresh the list of pricing plans
  };

  // Handle Delete functionality
  const handleDelete = async (id) => {
    await deletePricingPlan(id);
    fetchPricingPlans(); // Refresh the list after deletion
  };

  return (
    <div>
      <h1 className="pricingplan-title">Pricing Plans</h1>
      {/* Add/Edit Pricing Form */}
      <AddEditPricingForm
        onSubmit={handleAddOrEdit}
        currentPlan={currentPlan}
        onCancel={() => setCurrentPlan(null)}
      />

      {/* Pricing Plans Table */}
      <PricingTable
        pricingPlans={pricingPlans}
        onEdit={(plan) => setCurrentPlan(plan)} // Set plan for editing
        onDelete={handleDelete} // Handle delete
      />
    </div>
  );
};

export default ManagePackage;
