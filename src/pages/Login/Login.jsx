import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/images/logo.png";
import Heroimage from "../../assets/images/HeroImage.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Section: Create Account */}
        <div className="login-left">
          <div className="logo-container">
            {/* Replace src with your logo's URL */}
            <img
              src={Logo}
              alt="Company Logo"
              className="company-logo"
            />
          </div>
          <h2>Login to your account</h2>
          <p>
          Create new account?{" "}
            <a href="/signup" className="signup-link">
              Sign up
            </a>
          </p>
          <form className="login-form">
           {/* <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Company Name"
                required
              />
            </div>  */}
            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button type="submit" className="btn login-btn">
              Login
            </button>
            <a href="/forgetpassword" className="forgetpassword-link">
              forget password?
            </a>
          </form>
        </div>

        {/* Right Section: Introduction */}
        <div className="login-right">
          <h3>Introducing new features</h3>
          <p>
          Manage sales, inventory, and customer insights seamlessly with a POS system designed for modern businesses.
          </p>
          <div className="analytics-preview center">
            <img
              src={Heroimage}
              alt="Analytics"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
