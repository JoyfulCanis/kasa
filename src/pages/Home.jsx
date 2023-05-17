import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import HomeMain from '../components/HomeMain';
import Footer from '../components/Footer';

const Home = () => {

    const location = useLocation();

    return (
        <div>
            <Header />
            <HomeMain location={location}/>
            <Footer />
        </div>
    );
};

export default Home;