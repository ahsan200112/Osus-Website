import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="container-fluid bg-white shadow-sm py-3">
      <nav className="container d-flex align-items-center justify-content-between">
        {/* Logo Section */}
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="OSUS Logo"
            className="img-fluid"
            style={{ width: '150px' }}
          />
        </Link>

        {/* Navigation Links */}
        <ul className="nav d-none d-lg-flex">
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/features">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Start Free Trial Button */}
        <Link className="btn btn-primary d-none d-lg-inline-block" to="/start-trial" style={{
  backgroundColor: "white", color :"black" , borderColor:" rgba(0, 0, 0, 0.2)"
        }}>
          Start Free Trial
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="btn btn-outline-primary d-lg-none"
          style={{backgroundColor:"rgba(36, 100, 148, 1)", color:"white"}}
          type="button"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </nav>

      {/* Collapsible Menu for Mobile */}
      <div className={`collapse ${isOpen ? 'show' : ''} bg-white`} id="navbarNav">
        <ul className="nav flex-column p-3">
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/features">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item mt-3">
            <Link className="btn btn-primary w-100" style={{backgroundColor:"rgba(36, 100, 148, 1)", color:"white"}} to="/start-trial">
              Start Free Trial
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
