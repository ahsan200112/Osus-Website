import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making API requests

const PricingComponentPackage = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    // Fetch pricing plans from the backend API
    const fetchPricingPlans = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/pricing"); 
        setPricingPlans(response.data);
      } catch (error) {
        console.error('Error fetching pricing plans:', error);
      }
    };

    fetchPricingPlans();
  }, []);

  return (
    <div className="pricing-section">
      <div className="toggle-section">
        <button
          className={`toggle-button ${!isYearly ? 'active' : ''}`}
          onClick={() => setIsYearly(false)}
        >
          Pay Monthly
        </button>
        <button
          className={`toggle-button ${isYearly ? 'active' : ''}`}
          onClick={() => setIsYearly(true)}
        >
          Pay Yearly <span className="save-badge">Save Money</span>
        </button>
      </div>
      <div className="pricing-cards-container">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="pricing-card"
          >
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-description">{plan.description}</p>
            <div className="plan-price">
              <span className="price">
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              </span>{' '}
              {isYearly ? '/ Month' : '/ Month'}
            </div>
            <button className="plan-button">Get Started Now</button>
            <ul className="plan-features">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className={`feature ${feature.available ? 'available' : 'unavailable'}`}
                >
                  {feature.available ? '✔' : '✘'} {feature.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponentPackage;
