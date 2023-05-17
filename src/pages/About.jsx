import React from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import AboutMain from '../components/AboutMain';
import Footer from '../components/Footer';

const About = () => {

    const location = useLocation();

    return (
        <div>
            <Header />
            <AboutMain location={location} />
            <Footer />
        
        </div>
    );
};

export default About;