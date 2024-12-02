import React, { useState } from "react";
import "./PricingComponentForBuy.css";
import { useTranslation } from 'react-i18next';

const PricingComponentForBuy = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { t } = useTranslation();  // Initialize translation

  // Pricing Plans Data
  const pricingPlans = [
    {
      title: t('Freebie'),
      description: t('Ideal for individuals who need quick access to basic features.'),
      price: isYearly ? "SAR 0" : "SAR 0",
      features: [
        { text: t('Up to 2 users'), available: true },
        { text: t('Up to 2 users'), available: true },
        { text: t('Basic inventory management'), available: true },
        { text: t('Basic inventory management'), available: true },
        { text: t('Analytics and reporting tools'), available: false },
        { text: t('Custom integrations'), available: false },
        { text: t('Basic inventory management'), available: false },
        { text: t('Basic inventory management'), available: false },
      ],
    },
    {
      title: t('Professional'),
      description: t('Ideal for individuals who need advanced features and tools for client work.'),
      price: isYearly ? "SAR 20" : "SAR 25",
      features: [
        { text: t('Up to 10 users'), available: true },
        { text: t('Advanced inventory management'), available: true },
        { text: t('Analytics and reporting tools'), available: true },
        { text: t('24/7 support'), available: true },
        { text: t('Basic inventory management'), available: true },
        { text: t('Basic inventory management'), available: true },
        { text: t('Basic inventory management'), available: false },
        { text: t('Basic inventory management'), available: false },
      ],
      highlight: true, // Highlights the Professional plan
    },
    {
      title: t('Enterprise'),
      description: t('Designed for large businesses with unique requirements.'),
      price: isYearly ? "SAR 80" : " SAR 100",
      features: [
        { text: t('Unlimited users'), available: true },
        { text: t('24/7 support'), available: true },
        { text: t('Custom integrations'), available: true },
        { text: t('Dedicated account manager'), available: true },
        { text: t('Priority support'), available: true },
        { text: t('Analytics and reporting tools'), available: true },
        { text: t('Advanced inventory management'), available: true },
        { text: t('Basic inventory management'), available: true },
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
          {t('Pay Monthly')}
        </button>
        <button
          className={`toggle-button ${isYearly ? "active" : ""}`}
          onClick={() => setIsYearly(true)}
        >
         { t('Pay Yearly')} <span className="save-badge">{t('Save 25%')}</span>
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
              <span className="price">{plan.price}</span> {t('/ Month')}
            </div>
            <button className="plan-button">{t('Get Started Now')}</button>
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
