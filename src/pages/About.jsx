import React from 'react';
import { useLocation } from 'react-router-dom';

//?components import
import Header from '../components/Header';
import AboutMain from '../components/AboutMain';
import Footer from '../components/Footer';

//About page
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