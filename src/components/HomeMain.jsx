import React from 'react';
import Banner from './Banner';
import HomeSection from './HomeSection';

const Main = ({location}) => {
    return (
        <main className='homeMain'>
            <Banner location={location}/>
            <HomeSection />
        </main>
    );
};

export default Main;