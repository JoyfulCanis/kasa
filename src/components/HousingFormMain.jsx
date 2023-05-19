import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from './Carousel';
import HousingGeneralInfos from './HousingGeneralInfos';
import HousinsMoreInfos from './HousingMoreInfos';

const HousingFormMain = ({selectedApartment}) => {

    


    return (
        <main className='housingMain'>
            <section>
                <Carousel selectedApartment={selectedApartment}/>
                <HousingGeneralInfos selectedApartment={selectedApartment} />
                <HousinsMoreInfos selectedApartment={selectedApartment} />
                
            </section>

        </main>
        
    );
};

export default HousingFormMain;