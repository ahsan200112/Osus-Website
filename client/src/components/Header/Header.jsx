import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { useTranslation } from 'react-i18next';  // Importing useTranslation hook
import './Header.css';

const Header = () => {
  const { t } = useTranslation();  // Initialize translation
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="container-fluid bg-white shadow-sm py-3">
      <nav className="container d-flex align-items-center justify-content-between">
        {/* Logo Section */}
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt={t('logoAlt')}  // Translated logo alt text
            className="img-fluid"
            style={{ width: '150px' }}
          />
        </Link>

        {/* Navigation Links */}
        <ul className="nav d-none d-lg-flex">
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/services">{t('services')}</Link>  
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/features">{t('features')}</Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/pricing">{t('pricing')}</Link>  
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/contact">{t('contactUs')}</Link> 
          </li>
        </ul>

        {/* Language Toggle (Added here) */}
        <div className="language-toggle-container d-flex align-items-center">
          <LanguageToggle />
        </div>
        
        {/* Start Free Trial Button */}
        <Link className="btn btn-primary d-none d-lg-inline-block header-button" to="/start-trial" style={{
          backgroundColor: "white", color: "black", borderColor: "rgba(0, 0, 0, 0.2)"
        }}>
          {t('startFreeTrial')} 
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="btn btn-outline-primary d-lg-none"
          style={{backgroundColor: "rgba(36, 100, 148, 1)", color: "white"}}
          type="button"
          onClick={toggleMenu}
        >
          {t('menu')}  
        </button>
      </nav>

      {/* Collapsible Menu for Mobile */}
      <div className={`collapse ${isOpen ? 'show' : ''} bg-white`} id="navbarNav">
        <ul className="nav flex-column p-3">
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/services">{t('services')}</Link>  
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/features">{t('features')}</Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/pricing">{t('pricing')}</Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/contact">{t('contactUs')}</Link> 
          </li>
          <li className="nav-item mt-3">
            <Link className="btn btn-primary w-100" style={{backgroundColor:"rgba(36, 100, 148, 1)", color:"white"}} to="/start-trial">
              {t('startFreeTrial')}  
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
