import React from 'react';


//?componenets import
import Carousel from './Carousel';
import HousingGeneralInfos from './HousingGeneralInfos';
import HousinsMoreInfos from './HousingMoreInfos';


//This includes all <main> content for HousingForm.jsx
const HousingFormMain = ({ selectedApartment }) => {
    return (
        <main className='housingMain'>
            <section>
                <Carousel selectedApartment={selectedApartment} />
                <HousingGeneralInfos selectedApartment={selectedApartment} />
                <HousinsMoreInfos selectedApartment={selectedApartment} />

            </section>

        </main>

    );
};

export default HousingFormMain;