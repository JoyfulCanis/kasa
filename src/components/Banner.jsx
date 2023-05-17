import React from 'react';
import { useLocation } from 'react-router-dom';

const Banner = ({ location }) => {
    const whatIsLocation = location.pathname.split("/")[1].toLowerCase();
    return (
        
        <div className={"banner banner__"+ whatIsLocation}>
            <div className={'homeMain--darken'}></div>
            {
                whatIsLocation
                    ? null
                    :<h1 className='homeMain__title'>Chez vous, partout et ailleurs</h1>
            }

        </div>
    );
};

export default Banner;