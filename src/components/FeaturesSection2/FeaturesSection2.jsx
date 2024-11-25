import React from "react";
import "./FeaturesSection2.css"; // Custom styles if needed
import featureImage4yt from "../../assets/images/featureImage4yt.png" ;// Replace with your image path
import Cloud from "../../assets/images/Cloud Sync.png";
import Automation from "../../assets/images/Automation.png";
import Ledger from "../../assets/images/Ledger.png";

const FeaturesSection2 = () => {
  return (
    <section className="feature-section-2 py-5 text-center">
      <div className="container" style={{marginBottom:"70px"}}>
        {/* Section Header */}
        <h5 className="text-primary" style={{ fontSize: "20px", fontWeight: "400" }}>
          Key Features
        </h5>
        <h2 className="text-dark fw-bold" style={{ fontSize: "40px", fontWeight: "700" }}>
          How Does Our POS System Works?
        </h2>
        <p className="text-muted" style={{ fontSize: "20px" }}>
          Discover the features that make our POS system the ultimate tool for streamlining your business operations and enhancing customer satisfaction.
        </p>

        {/* Image Section */}
        <div className="my-4">
          <img src={featureImage4yt} className="img-fluid"/>
        </div>

        {/* 3 Boxes Section */}
        <div className="row justify-content-center">
          {/* First Box */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-box p-4 d-flex flex-column justify-content-between">
              <img src={Cloud} className="feature-image mb-3" />
              <h5 className="fw-bold">Real-Time Syncing</h5>
              <p className="text-muted">All data syncs instantly across devices, whether it’s a tablet, smartphone, or desktop.</p>
            </div>
          </div>

          {/* Middle Box (Thoda Chhota) */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-box p-4 d-flex flex-column justify-content-between">
              <img src={Automation} className="feature-image mb-3" />
              <h5 className="fw-bold">Setup and Configuration</h5>
              <p className="text-muted">Customize the system and Import your inventory and set up payment methods.</p>
            </div>
          </div>

          {/* Third Box */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-box p-4 d-flex flex-column justify-content-between">
              <img src={Ledger} className="feature-image mb-3" />
              <h5 className="fw-bold">Secure Transactions</h5>
              <p className="text-muted">Process payments securely with encryption and compliance with industry standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
