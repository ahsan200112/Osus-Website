import React, { useEffect } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import { useLocation } from 'react-router-dom';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'English', countryCode: 'GB' },
    { code: 'ar', label: 'العربية', countryCode: 'SA' },
  ];
  const location = useLocation();
  
  const handleMenuClick = (e) => {
    const selectedLang = e.key;
    i18n.changeLanguage(selectedLang);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();  // Update the direction (LTR/RTL)
  }, [i18n.language, location.pathname]);

  const menu = (
    <Menu onClick={handleMenuClick}>
      {languages.map((lng) => (
        <Menu.Item key={lng.code}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <Flag code={lng.countryCode} style={{ width: 20, marginRight: 8 }} />
            {lng.label}
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['hover']}>
      <Button className="language-toggle" style={{ border: 'none', background: 'transparent' }}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Flag code={i18n.language === 'ar' ? 'SA' : 'GB'} style={{ width: 20, marginRight: 8 }} />
          {languages.find(lng => lng.code === i18n.language)?.label}
        </span>
      </Button>
    </Dropdown>
  );
};

export default LanguageToggle;
