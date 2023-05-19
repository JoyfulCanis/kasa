import React from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/icons/logo.svg"

const Header = () => {
    return (
        <header className='header'>
            <NavLink to="/">
                <img className='header__logo-img' src={logo} alt="logo kasa" />
            </NavLink>
            <Navigation />
        </header>
    );
};

export default Header;