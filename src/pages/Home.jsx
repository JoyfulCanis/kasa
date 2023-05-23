import React from 'react';


//?components import
import Header from '../components/Header';
import HomeMain from '../components/HomeMain';
import Footer from '../components/Footer';



//This is the main page, opens for "/" address
const Home = () => {


    return (
        <div>
            <Header />
            <HomeMain />
            <Footer />
        </div>
    );
};

export default Home;