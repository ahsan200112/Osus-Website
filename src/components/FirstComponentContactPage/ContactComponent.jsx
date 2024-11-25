import React from 'react';
import './ContactComponent.css';

function ContactComponent() {
  return (
    <div className="container">
      <section className="text-center" style={{ marginTop:"3rem"}}>
       
        {/* Hero Text */}
        <div className="mb-4">
          <h1 className="fw-bold custom-spacing">Get in Touch With Us</h1>
          <p className="text-muted mb-3 custom2-spacing">
          We’re here to help you find the perfect Point of Sale solution.
          </p>
        </div>
        <div className="mb-5 custom2-spacing">
          <a href="/" className="btn btn-primary btn-lg" style={{backgroundColor:"rgba(36, 100, 148, 1)", color:"white"}}>
            Start Free Trial
          </a>
        </div>
        <hr></hr>
        </section>
        </div>
  )
}

export default ContactComponent;
