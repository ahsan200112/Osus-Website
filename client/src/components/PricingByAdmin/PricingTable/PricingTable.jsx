// src/components/Pricing/PricingTable/PricingTable.js
import React from "react";
import { Button, Table } from "react-bootstrap"; // Using Bootstrap
import "./PricingTable.css";

const PricingTable = ({ pricingPlans, onEdit, onDelete }) => {
  return (
    <div className="pricing-table-container">
      <Table striped bordered hover responsive>
        <thead className="text-center thead-center" style={{verticalAlign: "center"}}>
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
                <Button variant="warning" onClick={() => onEdit(plan)}
                  style={{ marginTop: "7px" }}
                  >
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => onDelete(plan._id)}
                  style={{ marginTop: "10px" }}
                  >
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
