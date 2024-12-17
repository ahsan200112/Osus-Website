import React from "react";
import { Link, Outlet } from "react-router-dom"; // Import Outlet for nested routes
import "./AdminDashboard.css";
import logo from "../../assets/images/logo.png";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h3 className="sidebar-heading">
          ADMIN PANEL
        </h3>
        <ul className="sidebar-links">
          <li>
            <Link to="/admin/packages">Manage Packages</Link>
          </li>
          <li>
            <Link to="/admin/users">Manage Users</Link>
          </li>
          <li>
            <Link to="/admin/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <div className="dashboard-content">
     {/* <img src={logo} alt="logo" /> */}
        {/* This is where the content of the nested route will be displayed */}
        <Outlet /> {/* Render nested route content here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
