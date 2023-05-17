import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../assets/data/db.json'

const HousingFormMain = () => {

    const location = useLocation();
    const urlId = location.pathname.split("/")[2];

    const [apartmentData, setApartmentData] = useState(data);
    const selectedApartment = apartmentData.find(apartment => apartment.id === urlId)
    const apartmentImg = selectedApartment.pictures
    const [actualImgIndex, setActualImgIndex] = useState(0)

    console.log(selectedApartment)

    return (
        <main className='housingMain'>
            <div className='housingMain__imgContainer'>
                <button className="housingMain__chevron--left"
                    onClick={() => {
                        actualImgIndex === 0 ? setActualImgIndex(apartmentImg.length - 1) : setActualImgIndex(actualImgIndex - 1)
                    }
                    } >
                    <img className="housingMain__chevron-img"
                        src="/galery-chevron.svg"
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
                        src="/galery-chevron.svg"
                        alt="chevron de défilement de la galerie" />
                </button>

                <span className='housingMain__imgIndex'>{`${actualImgIndex + 1}/${apartmentImg.length}`}</span>

            </div>
            
            <div>
                <h1>{selectedApartment.title}</h1>
                <address>{selectedApartment.location}</address>
            </div>
            <div>
                <p>{selectedApartment.host.name}</p>
                <div>
                    <img src={selectedApartment.host.picture} alt={selectedApartment.host.name} />
                </div>
            </div>

        </main>
    );
};

export default HousingFormMain;