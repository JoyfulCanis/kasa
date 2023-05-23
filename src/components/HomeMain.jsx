import React from 'react';
import { useLocation } from 'react-router-dom';

//?components import
import Banner from './Banner';
import HomeSection from './HomeSection';

//This includes <main> content for Home.jsx
const Main = () => {
    //Getting location to set background image of the banner on Banner.jsx
    const location = useLocation();

    return (
        <main className='homeMain'>
            <Banner location={location} />
            <HomeSection />
        </main>
    );
};

export default Main;