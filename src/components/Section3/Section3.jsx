import React from "react";
import "./Section3.css"; // Optional custom CSS
import Section3Image from "../../assets/images/Section3Image.png"; // Replace with your image path

const Section3 = () => {
  return (
    <section className="section3 py-6">
      <div className="container">
        <div className="row">
          {/* Left Side: Image */}
          <div className="col-lg-5 col-md-5 col-sm-12 image-container">
            <img src={Section3Image} className="img-fluid" />
          </div>

          {/* Right Side: Text, Heading, Description, and Button */}
          <div className="col-lg-7 col-md-7 col-sm-12 text-container">
            <h2 className="fw-bold" style={{ fontSize: "30px", color: "white" }}>
              Streamline Your Business with Our POS System
            </h2>
            <p className="fw-bold" style={{ fontSize: "18px", color: "rgba(209, 209, 209, 1)" }}>
            Simplify sales, track inventory, and manage operations effortlessly. Get started today and experience the power of an all-in-one solution!
            </p>
            <div className="button-container">
              <a
                href="/"
                className="btn btn-primary get-started-btn"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
