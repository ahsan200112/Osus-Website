import React from 'react';
import './FeatureComponent.css';
import { useTranslation } from 'react-i18next';

function FeatureComponent() {
  const { t } = useTranslation();  // Initialize translation
  return (
    <div className="container">
      <section className="text-center" style={{ marginTop:"3rem"}}>
       
        {/* Hero Text */}
        <div className="mb-4">
          <h1 className="fw-bold custom-spacing">{t('Transform the Way You Do Business')}</h1>
          <p className="text-muted mb-3 custom2-spacing">
          {t('From sales to customer management, our POS system equips you with everything you need to run your business efficiently and effectively.')}
          </p>
        </div>
        <div className="mb-5 custom2-spacing">
          <a href="/login" className="btn btn-primary btn-lg" style={{backgroundColor:"rgba(36, 100, 148, 1)", color:"white"}}>
           {t('Start Free Trial')}
          </a>
        </div>
        <hr></hr>
        </section>
        </div>
  )
}

export default FeatureComponent;
