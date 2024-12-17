import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import SaudiLogoHead from "../../assets/images/saudi_tech_logo-head.png";
import SaudiLogoDesc from "../../assets/images/saudi_tech_logo.png";
import ZatcaLogoHead from "../../assets/images/zatca-logo-head.png";
import ZatcaLogoDesc from "../../assets/images/zatca-logo.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();  // Initialize translation
  return (
    <footer className="footer-section py-5">
      <div className="container">
        {/* Top Row: Four Boxes */}
        <div className="row text-center text-md-start">
          {/* Box 1 */}
          <div className="col-lg-3 col-md-6 mb-3">
            <img src={logo} className="footer-logo mb-3" />
            <p className="footer-description">
              {t('Effortlessly manage sales, track inventory in real-time, and streamline operations with our all-in-one solution.')}
            </p>
          </div>

          {/* Box 2: Quick Links */}
          <div className="col-lg-3 col-md-6 mb-3 mt-3">
            <ul className="footer-links text-center">
              <li><a href="/">{t('Customer Support')}</a></li>
              <li><a href="/">{t('Delivery Details')}</a></li>
              <li><a href="/">{t('Terms & Conditions')}</a></li>
              <li><a href="/">{t('Privacy Policy')}</a></li>
            </ul>
          </div>

          {/* Box 3: More Links */}
          <div className="col-lg-3 col-md-6 mb-3 mt-3">
            <ul className="footer-links text-center">
              <li><a href="/">{t('About Us')}</a></li>
              <li><a href="/">{t('Careers')}</a></li>
              <li><a href="/">{t('Contact Us')}</a></li>
              <li><a href="/">{t('FAQs')}</a></li>
            </ul>
          </div>

          {/* Box 4: Address and Social Icons */}
          <div className="col-lg-3 col-md-6 mb-3">
            <img src={ZatcaLogoHead} alt="Zatca Logo Head" className="mb-2 zatac-logo-head"/>
            <img src={ZatcaLogoDesc} alt="Zatca Logo Desc" className="mb-2 zatac-logo-desc"/>
            <img src={SaudiLogoHead} alt="Saudi Logo Head" className="mb-2 saudi-logo-head"/>
            <img src={SaudiLogoDesc} alt="Saudi Logo Desc" className="saudi-logo-desc"/>
            <p className="footer-address" style={{marginTop: "-13px"}}>
              +996 000 000 <br />
              help@osusco.com
            </p>
            <div className="social-icons">
              <a href="/" className="me-3">
                <FaFacebook />
              </a>
              <a href="/" className="me-3">
                <FaTwitter />
              </a>
              <a href="/" className="me-3">
                <FaLinkedin />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Row: Newsletter Form */}
        <div className="row">
          <div className="col-lg-6 mx-auto text-center mb-4">
            <h5 className="footer-heading mb-3">{t('Newsletter')}</h5>
            <form className="footer-form d-flex justify-content-center">
              <input
                type="email"
                className="form-control me-2"
                placeholder={t('Enter your email')}
              />
              <button type="submit" className="btn">{t('Subscribe')}</button>
            </form>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="row">
          <div className="col-12 text-center mt-4">
            <p className="footer-copyright">
             {t('© Copyright 2022, All Rights Reserved by OSUS')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
