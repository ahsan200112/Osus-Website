import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeatureTable.css";
import GreenTick from '../../assets/images/GreenTick.png';

const FeatureTable = () => {
  return (
    <div className="container my-5">
      <div className="table-responsive"> {/* Makes table scrollable on small screens */}
        <table className="table text-center feature-table">
          <thead>
            <tr className="header-row">
              <th className="rounded-start">Feature</th>
              <th>Frebbie</th>
              <th>Professional</th>
              <th className="rounded-end">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="rounded-start"style={{color: "rgba(60, 60, 60, 1)"}}>Number of Users</td>
              <td>2</td>
              <td>10</td>
              <td className="rounded-end">Unlimited</td>
            </tr>
            <tr>
              <td className="rounded-start" style={{color: "rgba(60, 60, 60, 1)"}}>Support</td>
              <td><img src={GreenTick} className="checkmark-img" /></td>
              <td><img src={GreenTick} className="checkmark-img" /></td>
              <td className="rounded-end"><img src={GreenTick} className="checkmark-img" /></td>
            </tr>
            <tr>
              <td className="rounded-start"style={{color: "rgba(60, 60, 60, 1)"}}>Sales Reports</td>
              <td>Email</td>
              <td>24/7 Chat</td>
              <td className="rounded-end">Dedicated Manager</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureTable;
