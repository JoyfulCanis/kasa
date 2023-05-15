import React from 'react';

const Card = ({h2, cover}) => {
    return (
        <article className='homeSection__card'>
            <div className='homeSection__card__gradient'></div>
            <img className='homeSection__card__img' src={cover} alt={h2}/>
            <h2 className='homeSection__card__h2'>{h2}</h2>
        </article>
    );
};

export default Card;