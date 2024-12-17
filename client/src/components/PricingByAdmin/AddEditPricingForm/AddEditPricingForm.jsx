// src/components/Pricing/AddEditPricingForm/AddEditPricingForm.js
import React, { useState, useEffect } from "react";
import { Button, Form, Col, Row } from "react-bootstrap"; // Using Bootstrap
import "./AddEditPricingForm.css";

const AddEditPricingForm = ({ onSubmit, currentPlan, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    monthlyPrice: "",
    yearlyPrice: "",
    features: [{ text: "", available: false }],
  });

  useEffect(() => {
    if (currentPlan) {
      setFormData(currentPlan);
    }
  }, [currentPlan]);

  const handleFeatureChange = (index, field, value) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index][field] = value;
    setFormData({ ...formData, features: updatedFeatures });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, { text: "", available: false }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <h3>{currentPlan ? "Edit Pricing Plan" : "Add Pricing Plan"}</h3>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter plan title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMonthlyPrice">
            <Form.Label>Monthly Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter monthly price"
              value={formData.monthlyPrice}
              onChange={(e) => setFormData({ ...formData, monthlyPrice: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridYearlyPrice">
            <Form.Label>Yearly Price (Per Month)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter yearly price"
              value={formData.yearlyPrice}
              onChange={(e) => setFormData({ ...formData, yearlyPrice: e.target.value })}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </Form.Group>
        </Row>

        <div className="features-container">
          <h5>Features:</h5>
          {formData.features.map((feature, index) => (
            <Row className="mb-3" key={index}>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Feature text"
                  value={feature.text}
                  onChange={(e) => handleFeatureChange(index, "text", e.target.value)}
                  required
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Available"
                  checked={feature.available}
                  onChange={(e) =>
                    handleFeatureChange(index, "available", e.target.checked)
                  }
                />
              </Col>
            </Row>
          ))}
          <Button variant="outline-primary" onClick={addFeature}>
            Add Feature
          </Button>
        </div>

        <div className="form-actions">
          <Button variant="primary" type="submit">
            {currentPlan ? "Update" : "Add Plan"}
          </Button>
          <Button variant="secondary" type="button" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddEditPricingForm;
