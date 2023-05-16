import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ h2, cover, urlId }) => {
    console.log(h2)
    const urlLinkCode = `Fiche_Logement/${urlId}`;
    return (

        <article className='homeSection__card'>
            <NavLink to={urlLinkCode ? urlLinkCode : "Oh-no"}>
                <div className='homeSection__card__gradient'></div>
                <img className='homeSection__card__img' src={cover} alt={h2} />
                <h2 className='homeSection__card__title'>{h2}</h2>
            </NavLink>
        </article>
    );
};

export default Card;