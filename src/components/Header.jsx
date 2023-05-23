import React from 'react';
import { NavLink } from 'react-router-dom';

//?components import
import Navigation from './Navigation';
//?logo import
import logo from "../assets/images/icons/logo.svg"


//Header for all pages, logo leads to home page
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