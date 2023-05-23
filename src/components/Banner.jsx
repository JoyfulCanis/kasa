import React from 'react';


//Banner, used in Home.jsx and About.jsx
const Banner = ({ location }) => {
    //Location prop is use to show the correct image, switching between
    const whatIsLocation = location.pathname.split("/")[1].toLowerCase();
    return (

        <div className={"banner banner__" + whatIsLocation}>
            <div className={'homeMain--darken'}></div>
            {
                whatIsLocation
                    ? null
                    : <h1 className='homeMain__title'>Chez vous, partout et ailleurs</h1>
            }

        </div>
    );
};

export default Banner;