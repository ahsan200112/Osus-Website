import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import FeaturesPage from '../pages/FeaturesPage';
import PricingPage from '../pages/PricingPage';
import ContactPage from '../pages/ContactPage';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import AdminDashboard from '../pages/AdminDashboard//AdminDashboard';
import ManagePackage from '../pages/AdminDashboard/ManagePackage/ManagePackage';
import ManageUsers from '../pages/AdminDashboard/ManageUsers/ManageUsers';

import AdminDashboard2 from '../pages/AdminDashboard2//AdminDashboard2';
import ManagePackage2 from '../pages/AdminDashboard2/ManagePackage2/ManagePackage2';
import ManageUsers2 from '../pages/AdminDashboard2/ManageUsers2/ManageUsers2';

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
                
                <Route path="/admin" element={<AdminDashboard />}>
                    <Route path="packages" element={<ManagePackage />} />
                    <Route path="users" element={<ManageUsers />} />
                    <Route path="settings" element={<div>Settings Page</div>} />
                </Route>

                <Route path="/admin2" element={<AdminDashboard2 />}>
                    <Route path="packages2" element={<ManagePackage2 />} />
                    <Route path="users2" element={<ManageUsers2 />} />
                </Route>

            </Routes>
        </Router>
    );
};

export default AppRoutes;
