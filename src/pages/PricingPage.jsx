import React from 'react'
import Header from "../components/Header/Header" ;
import Footer from "../components/Footer/Footer";
import PricingComponent from '../components/FirstComponentPricingPage/PricingComponent'
import StillHaveQuestion from '../components/StillHaveQuestionSection/StillHaveQuestion';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import PricingComponentForBuy from '../components/PricingComponentForBuying/PricingComponentForBuy';
import FeatureTable from '../components/FeatureTable/FeatureTable';

function PricingPage() {
  return (
    <div>
      <Header/>
      <PricingComponent/>
      <PricingComponentForBuy/>
      <FeatureTable/>
      <FrequentlyAskedQuestions/>
      <StillHaveQuestion/>
      <Footer/>
    </div>
  )
}

export default PricingPage;
