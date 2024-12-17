import React from 'react';
import HeroImage from '../../assets/images/HeroImage.png';
import HeroLogoList from '../../assets/images/HeroLogoList.png';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();  // Initialize translation
  return (
    <section className="hero-section text-center py-5">
      <div className="container">
        {/* Hero Text */}
        <div className="mb-4">
          <h1 className="fw-bold">{t('Simplify Your Business Operations with Our')}</h1>
          <h1 className="fw-bold mb-3">{t('All-in-One POS System!')}</h1>
          <p className="text-muted">
            {t('Manage sales, inventory, and customer insights seamlessly with a POS system designed for modern businesses.')}
          </p>
        </div>
        <div className="mb-4">
          <a href="/login" className="btn btn-primary btn-lg" style={{backgroundColor:"rgba(36, 100, 148, 1)", color:"white"}}>
            {t('Get Started Today')}
          </a>
        </div>

        {/* Hero Image */}
        <div className="mb-5">
          <img src={HeroImage} alt="Hero Section" className="img-fluid w-75" />
        </div>

        {/* Logo List */}
        <div>
          <img src={HeroLogoList} alt="Partner Logos" className="img-fluid w-100" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
