import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeatureTable.css";
import GreenTick from '../../assets/images/GreenTick.png';
import { useTranslation } from 'react-i18next';

const FeatureTable = () => {
  const { t } = useTranslation();  // Initialize translation
  return (
    <div className="container my-5">
      <div className="table-responsive"> {/* Makes table scrollable on small screens */}
        <table className="table text-center feature-table">
          <thead>
            <tr className="header-row">
              <th className="rounded-start">{t('Feature')}</th>
              <th>{t('Frebbie')}</th>
              <th>{t('Professional')}</th>
              <th className="rounded-end">{t('Enterprise')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="rounded-start"style={{color: "rgba(60, 60, 60, 1)"}}>{t('Number of Users')}</td>
              <td>{t('2')}</td>
              <td>{t('10')}</td>
              <td className="rounded-end">{t('Unlimited')}</td>
            </tr>
            <tr>
              <td className="rounded-start" style={{color: "rgba(60, 60, 60, 1)"}}>{t('Support')}</td>
              <td><img src={GreenTick} className="checkmark-img" /></td>
              <td><img src={GreenTick} className="checkmark-img" /></td>
              <td className="rounded-end"><img src={GreenTick} className="checkmark-img" /></td>
            </tr>
            <tr>
              <td className="rounded-start"style={{color: "rgba(60, 60, 60, 1)"}}>{t('Sales Reports')}</td>
              <td>{t('Email')}</td>
              <td>{t('24/7 Chat')}</td>
              <td className="rounded-end">{t('Dedicated Manager')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureTable;
