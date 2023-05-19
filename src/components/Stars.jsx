import React from 'react';
import starPink from "../assets/images/icons/star-pink.svg"
import starGrey from "../assets/images/icons/star-grey.svg"


const Stars = ({fullStars}) => {

    const emptyStars = 5 - fullStars;
    let fullStarsItems = [];
    let emptyStarsItems = [];
    for (let i = 0; i < fullStars; i++){
        fullStarsItems.push(<img key={"fs" + i} className="star" src={starPink} alt="full star"></img>)
    }
    for (let i = 0; i < emptyStars; i++){
        emptyStarsItems.push(<img key={"es" + i} className="star" src={starGrey} alt="empty star"></img>)
    }

    return (
        <div className='housingForm__generalInfos__starsContainer'>
            {fullStarsItems}
            {emptyStarsItems}
        </div>
    );
};

export default Stars;