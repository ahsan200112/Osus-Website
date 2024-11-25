import React from 'react';
import FeaturesSection1 from '../components/FeaturesSection1/FeaturesSection1';
import FeatureComponent from '../components/FirstComponentFeaturePage/FeatureComponent';
import Section3 from '../components/Section3/Section3';
import FeaturesSection3 from '../components/FeaturesSection3/FeaturesSection3';

function FeaturesPage() {
  return (
    <div>
      <FeatureComponent/>
      <FeaturesSection1/>
      <FeaturesSection3/>
       <Section3/>
    </div>
  )
}

export default FeaturesPage
