import React from "react";
import { Link, Outlet } from "react-router-dom"; // Import Outlet for nested routes
import "./AdminDashboard2.css";
import logo from "../../assets/images/logo.png";

const AdminDashboard2 = () => {
  return (
    <div className="admin-dashboard">
      {/* Sidebar Section */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to="/admin2/packages2">Manage Packages</Link>
          </li>
          <li>
            <Link to="/admin2/users2">Manage Users</Link>
          </li>
        </ul>
      </div>

      {/* Main Dashboard Content Section */}
      <div className="dashboard-content">
        {/* Header Section */}
        <div className="header">
          <div className="header-left">
            <button className="sidebar-toggle" onClick={() => document.body.classList.toggle("mini-sidebar")}>
              <span className="bar-icon"></span>
              <span className="bar-icon"></span>
              <span className="bar-icon"></span>
              <span className="bar-icon"></span>
            </button>
            <h2>Admin Panel</h2>
          </div>
          <div className="header-right">
            <span className="user-name">Hello, Admin</span>
            <Link to="/login" className="logout-btn">Logout</Link>
          </div>
        </div>

        {/* Content for Nested Routes */}
        <Outlet /> {/* Render nested route content here */}
      </div>
    </div>
  );
};

export default AdminDashboard2;
