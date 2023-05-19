import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from './Carousel';
import HousingGeneralInfos from './HousingGeneralInfos';

const HousingFormMain = ({selectedApartment}) => {


    


    return (
        <main className='housingMain'>
            <section>
                <Carousel selectedApartment={selectedApartment}/>
                <HousingGeneralInfos selectedApartment={selectedApartment} />
                
            </section>

        </main>
        
    );
};

export default HousingFormMain;