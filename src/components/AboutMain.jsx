import React from 'react';
import Banner from './Banner';
import AboutList from './AboutList';

const AboutMain = ({location}) => {
    return (
        <main className='homeMain'>
            <Banner location={location}/>
            <AboutList />
        </main>
    );
};

export default AboutMain;