import React from 'react';
import Header from "../components/Header/Header" ;
import Footer from "../components/Footer/Footer";
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturesSection1 from '../components/FeaturesSection1/FeaturesSection1';
import Testimonials from '../components/Testimonials/Testimonials';
import FeaturesSection2 from '../components/FeaturesSection2/FeaturesSection2';
import Section3 from '../components/Section3/Section3';

const HomePage = () => {
   

    return (
        <>
        <Header/>
            <HeroSection />
            <FeaturesSection1 />
            <Testimonials />
            <FeaturesSection2/>
            <Section3/>
            <Footer/>
        </>
    );
};

export default HomePage;
