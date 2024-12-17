import React from 'react';
import AppRoutes from './routes';
import { useTranslation } from 'react-i18next';
import './i18n';
import axios from "axios";

const App = () => {
    const { t, i18n } = useTranslation();

    return (
         < AppRoutes style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}/> 
    );
};
axios.defaults.baseURL = "http://localhost:5000"; // Set the base URL globally

export default App;
