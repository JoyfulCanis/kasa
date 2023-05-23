import React from 'react';

//?footer logo import
import logoWhite from "../assets/images/icons/logo-white.svg"


//Footer for all pages
const Footer = () => {

    return (
        <footer className='footer'>
            <img className='footer__logo-img' src={logoWhite} alt="logo kasa" />
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;