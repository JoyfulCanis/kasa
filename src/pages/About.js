import React from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner';
import AboutMain from '../components/AboutMain';

const About = () => {

    const location = useLocation();

    return (
        <div>
            <Header />
            <AboutMain location={location} />
        </div>
    );
};

export default About;