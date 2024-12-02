import React from 'react';
import './PricingComponent.css';
import { useTranslation } from 'react-i18next';

function PricingComponent() {
  const { t } = useTranslation();  // Initialize translation
  return (
    <div className="container">
      <section className="text-center" style={{ marginTop:"3rem"}}>
       
        {/* Hero Text */}
        <div className="mb-4">
          <h1 className="fw-bold custom-spacing">{t('Find the Perfect Plan for Your Business')}</h1>
          <p className="text-muted mb-3 custom2-spacing">
          {t('Choose a plan thats right for you')}
          </p>
        </div>
        <div className="mb-5 custom2-spacing">
          <a href="/" className="btn btn-primary btn-lg" style={{backgroundColor:"rgba(36, 100, 148, 1)", color:"white"}}>
           {t('Start Free Trial')}
          </a>
        </div>
        <hr></hr>
        </section>
        </div>
  )
}

export default PricingComponent;
