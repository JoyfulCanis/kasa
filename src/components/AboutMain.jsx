import React from 'react';

//?components import
import Banner from './Banner';
import AboutList from './AboutList';



//All <main> content in About.jsx
const AboutMain = ({ location }) => {


    return (
        <main className='homeMain'>
            <Banner location={location} />
            <AboutList />
        </main>
    );
};

export default AboutMain;