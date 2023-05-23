import React, { useState } from 'react';

//Chevron import, used to slide images
import galeryChevron from "../assets/images/icons/galery-chevron.svg"


const Carousel = ({ selectedApartment }) => {

    //Getting all images
    const apartmentImg = selectedApartment.pictures
    //Index used to know wich image to show
    const [actualImgIndex, setActualImgIndex] = useState(0)

    return (
        <div className='housingMain__imgContainer'>
            {/* LEFT CHEVRON   ------   apartmentImg.lenght -1 because index starts with 0 */}
            <button className="housingMain__chevron--left"
                onClick={() => {
                    actualImgIndex === 0 ? setActualImgIndex(apartmentImg.length - 1) : setActualImgIndex(actualImgIndex - 1)
                }
                } >
                <img className="housingMain__chevron-img"
                    src={galeryChevron}
                    alt="chevron de défilement de la galerie" />
            </button>
            {/* Index used to show the actual img */}
            <img className='housingMain__img'
                src={[apartmentImg][0][actualImgIndex]}
                alt={selectedApartment.title} />
            {/* RIGHT CHEVRON    ------  max = length -1 because index starts with 0 */}
            <button className="housingMain__chevron--right"
                onClick={() => {
                    const max = apartmentImg.length - 1
                    actualImgIndex === max ? setActualImgIndex(0) : setActualImgIndex(actualImgIndex + 1)
                }}
            >
                <img className="housingMain__chevron-img"
                    src={galeryChevron}
                    alt="chevron de défilement de la galerie" />
            </button>
            {/* Image counter */}
            <span className='housingMain__imgIndex'>{`${actualImgIndex + 1}/${apartmentImg.length}`}</span>

        </div>
    );
};

export default Carousel;