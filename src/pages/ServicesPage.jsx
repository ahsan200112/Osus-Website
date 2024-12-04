import React from "react";
import Header from "../components/Header/Header" ;
import Footer from "../components/Footer/Footer";
import FeaturesSection1 from '../components/FeaturesSection1/FeaturesSection1';
import FeaturesSection2 from '../components/FeaturesSection2/FeaturesSection2';
import Section3 from '../components/Section3/Section3';

function ServicesPage(){
    return(
  <div>
    <Header/>
    <FeaturesSection1 />
    <FeaturesSection2/>
    <Section3/>
    <Footer/>
  </div>
    )
}
export default ServicesPage;