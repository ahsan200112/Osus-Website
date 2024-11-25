import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturesSection1 from '../components/FeaturesSection1/FeaturesSection1';
import Testimonials from '../components/Testimonials/Testimonials';
import FeaturesSection2 from '../components/FeaturesSection2/FeaturesSection2';
import Section3 from '../components/Section3/Section3';

const HomePage = () => {
   

    return (
        <>
            <HeroSection />
            <FeaturesSection1 />
            <Testimonials />
            <FeaturesSection2/>
            <Section3/>
        </>
    );
};

export default HomePage;
