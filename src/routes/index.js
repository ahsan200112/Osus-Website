import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import FeaturesPage from '../pages/FeaturesPage';
import PricingPage from '../pages/PricingPage';
import ContactPage from '../pages/ContactPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
