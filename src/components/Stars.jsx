import React from 'react';

//?components import
import starPink from "../assets/images/icons/star-pink.svg"
import starGrey from "../assets/images/icons/star-grey.svg"

//This is the 5 stars ranking

const Stars = ({ fullStars }) => {
    // Setting number of empty stars (max - number of full stars)
    const emptyStars = 5 - fullStars;
    //Creating arrays ready to receive HTML code based on number of empty/full stars
    let fullStarsItems = [];
    let emptyStarsItems = [];

    //Including HTML  fs = full star / es = empty star
    for (let i = 0; i < fullStars; i++) {
        fullStarsItems.push(<img key={"fs" + i} className="star" src={starPink} alt="full star"></img>)
    }
    for (let i = 0; i < emptyStars; i++) {
        emptyStarsItems.push(<img key={"es" + i} className="star" src={starGrey} alt="empty star"></img>)
    }

    //Returning HTML arrays
    return (
        <div className='housingForm__generalInfos__starsContainer'>
            {fullStarsItems}
            {emptyStarsItems}
        </div>
    );
};

export default Stars;