import React, { useState } from "react";
import "./PricingComponentForBuy.css";

const PricingComponentForBuy = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing Plans Data
  const pricingPlans = [
    {
      title: "Freebie",
      description: "Ideal for individuals who need quick access to basic features.",
      price: isYearly ? "$0" : "$0",
      features: [
        { text: "Up to 2 users", available: true },
        { text: "Up to 2 users", available: true },
        { text: "Basic inventory management", available: true },
        { text: "Basic inventory management", available: true },
        { text: "Analytics and reporting tools", available: false },
        { text: "Custom integrations", available: false },
        { text: "Basic inventory management", available: false },
        { text: "Basic inventory management", available: false },
      ],
    },
    {
      title: "Professional",
      description: "Ideal for individuals who need advanced features and tools for client work.",
      price: isYearly ? "$20" : "$25",
      features: [
        { text: "Up to 10 users", available: true },
        { text: "Advanced inventory management", available: true },
        { text: "Analytics and reporting tools", available: true },
        { text: "24/7 support", available: true },
        { text: "Basic inventory management", available: true },
        { text: "Basic inventory management", available: true },
        { text: "Basic inventory management", available: false },
        { text: "Basic inventory management", available: false },
      ],
      highlight: true, // Highlights the Professional plan
    },
    {
      title: "Enterprise",
      description: "Designed for large businesses with unique requirements.",
      price: isYearly ? "$80" : "$100",
      features: [
        { text: "Unlimited users", available: true },
        { text: "24/7 support", available: true },
        { text: "Custom integrations", available: true },
        { text: "Dedicated account manager", available: true },
        { text: "Priority support", available: true },
        { text: "Analytics and reporting tools", available: true },
        { text: "Advanced inventory management", available: true },
        { text: "Basic inventory management", available: true },
      ],
    },
  ];

  return (
    <div className="pricing-section">
      <div className="toggle-section">
        <button
          className={`toggle-button ${!isYearly ? "active" : ""}`}
          onClick={() => setIsYearly(false)}
        >
          Pay Monthly
        </button>
        <button
          className={`toggle-button ${isYearly ? "active" : ""}`}
          onClick={() => setIsYearly(true)}
        >
          Pay Yearly <span className="save-badge">Save 25%</span>
        </button>
      </div>
      <div className="pricing-cards-container">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.highlight ? "highlighted" : ""}`}
          >
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-description">{plan.description}</p>
            <div className="plan-price">
              <span className="price">{plan.price}</span> / Month
            </div>
            <button className="plan-button">Get Started Now</button>
            <ul className="plan-features">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className={`feature ${
                    feature.available ? "available" : "unavailable"
                  }`}
                >
                  {feature.available ? "✔" : "✘"} {feature.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponentForBuy;
