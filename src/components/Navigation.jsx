import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
        <nav className='header__navigation'>
            <ul className='header__navigation__list'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>

                <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A Propos</li>
                </NavLink>

            </ul>

        </nav>
    );
};

export default Navigation;