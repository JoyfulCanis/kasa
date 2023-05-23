import React from 'react';
import { NavLink } from 'react-router-dom';


//?components import
import Header from '../components/Header';
import Footer from '../components/Footer';


//Speaks for itself
const PageNotFound = () => {
    return (
        <div >
            <Header />
            <main className='pageNotFound'>
                <h1 className='pageNotFound__title'>404</h1>
                <p className='pageNotFound__text'>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">
                    <p className='pageNotFound__homeLink'>Retourner sur la page d’accueil</p>
                </NavLink>
            </main>
            <Footer />
        </div>
    );
};

export default PageNotFound;