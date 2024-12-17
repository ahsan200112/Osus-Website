import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ErrorBoundary from '../components/ErrorBoundary';
import StillHaveQuestion from '../components/StillHaveQuestionSection/StillHaveQuestion';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import PricingComponentForBuy from '../components/PricingComponentForBuying/PricingComponentForBuy';
import FeatureTable from '../components/FeatureTable/FeatureTable';
import PricingComponentPackage from "../components/PricingComponentPackage/PricingComponentPackage";

function PricingPage() {
  return (
    <div>
      <Header />
      <PricingComponentForBuy />
      <FeatureTable />
      <ErrorBoundary>
        <PricingComponentPackage />
      </ErrorBoundary>
      <FrequentlyAskedQuestions />
      <StillHaveQuestion />
      <Footer />
    </div>
  )
}

export default PricingPage;
