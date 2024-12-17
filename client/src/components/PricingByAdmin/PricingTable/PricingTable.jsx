// src/components/Pricing/PricingTable/PricingTable.js
import React from "react";
import { Button, Table } from "react-bootstrap"; // Using Bootstrap

const PricingTable = ({ pricingPlans, onEdit, onDelete }) => {
  return (
    <div className="pricing-table-container">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Monthly Price</th>
            <th>Yearly Price (Per Month)</th>
            <th>Features</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pricingPlans.map((plan) => (
            <tr key={plan._id}>
              <td>{plan.title}</td>
              <td>{plan.description}</td>
              <td>{plan.monthlyPrice}</td>
              <td>{plan.yearlyPrice}</td>
              <td>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      {feature.text} - {feature.available ? "Yes" : "No"}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <Button variant="warning" onClick={() => onEdit(plan)}>
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => onDelete(plan._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PricingTable;
