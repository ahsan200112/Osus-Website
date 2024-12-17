import React from 'react';
import AppRoutes from './routes';
import { useTranslation } from 'react-i18next';
import './i18n';

const App = () => {
    const { t, i18n } = useTranslation();

    return (
         < AppRoutes style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}/> 
    );
};

export default App;
