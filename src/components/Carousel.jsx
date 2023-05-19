import React, { useState } from 'react';
import galeryChevron from "../assets/images/icons/galery-chevron.svg"
const Carousel = ({selectedApartment}) => {
    const apartmentImg = selectedApartment.pictures
    const [actualImgIndex, setActualImgIndex] = useState(0)

    return (
        <div className='housingMain__imgContainer'>
                    <button className="housingMain__chevron--left"
                        onClick={() => {
                            actualImgIndex === 0 ? setActualImgIndex(apartmentImg.length - 1) : setActualImgIndex(actualImgIndex - 1)
                        }
                        } >
                        <img className="housingMain__chevron-img"
                            src={galeryChevron}
                            alt="chevron de défilement de la galerie" />
                    </button>

                    <img className='housingMain__img'
                        src={[apartmentImg][0][actualImgIndex]}
                        alt={selectedApartment.title} />

                    <button className="housingMain__chevron--right"
                        onClick={() => {
                            const length = apartmentImg.length - 1
                            actualImgIndex === length ? setActualImgIndex(0) : setActualImgIndex(actualImgIndex + 1)
                        }}
                    >
                        <img className="housingMain__chevron-img"
                            src={galeryChevron}
                            alt="chevron de défilement de la galerie" />
                    </button>

                    <span className='housingMain__imgIndex'>{`${actualImgIndex + 1}/${apartmentImg.length}`}</span>

                </div>
    );
};

export default Carousel;