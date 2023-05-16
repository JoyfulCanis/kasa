import React from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <NavLink to="/">
                <img className='header__logo-img' src="logo.svg" alt="logo kasa" />
            </NavLink>
            <Navigation />
        </header>
    );
};

export default Header;