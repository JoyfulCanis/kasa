import React from 'react';
import { useLocation } from 'react-router-dom';

const Banner = ({ location }) => {
    const isLocationTrue = location.pathname.includes("About");

    return (

        <div className={isLocationTrue ? "aboutMain__banner banner" : "homeMain__banner banner"}>
            <div className={'homeMain--darken'}></div>
            {
                isLocationTrue
                    ? null
                    :<h1 className='homeMain__title'>Chez vous, partout et ailleurs</h1>
            }

        </div>
    );
};

export default Banner;