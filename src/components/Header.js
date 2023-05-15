import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className='header'>
            <img className='header__logo-img' src="logo.svg" alt="logo kasa" />
            <Navigation />
        </header>
    );
};

export default Header;