import React from 'react'
import PricingComponent from '../components/FirstComponentPricingPage/PricingComponent'
import StillHaveQuestion from '../components/StillHaveQuestionSection/StillHaveQuestion';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import PricingComponentForBuy from '../components/PricingComponentForBuying/PricingComponentForBuy';
import FeatureTable from '../components/FeatureTable/FeatureTable';

function PricingPage() {
  return (
    <div>
      <PricingComponent/>
      <PricingComponentForBuy/>
      <FeatureTable/>
      <FrequentlyAskedQuestions/>
      <StillHaveQuestion/>
    </div>
  )
}

export default PricingPage;
