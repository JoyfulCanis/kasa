import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
        <nav className='header__navigation'>
            <ul className='header__navigation__list'>
                <li>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        A Propos
                    </NavLink>
                </li>

            </ul>

        </nav>
    );
};

export default Navigation;