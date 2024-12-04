import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/images/logo.png";
import Heroimage from "../../assets/images/HeroImage.png";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Left Section: Create Account */}
        <div className="signup-left">
          <div className="logo-container">
            <img src={Logo} alt="Company Logo" className="company-logo" />
          </div>
          <h2>Create Account</h2>
          <p>
            Already have an account?{" "}
            <a href="/login" className="login-link">
              Sign in
            </a>
          </p>
          <form className="signup-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <select className="form-control" required>
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn signup-btn">
              Sign Up
            </button>
          </form>
        </div>

        {/* Right Section: Introduction */}
        <div className="signup-right">
          <h3>Introducing new features</h3>
          <p>
            Manage sales, inventory, and customer insights seamlessly with a POS
            system designed for modern businesses.
          </p>
          <div className="analytics-preview center">
            <img src={Heroimage} alt="Analytics" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
