import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

//?Data import (apartments)
import data from '../assets/data/db.json'


//?components import
import Header from '../components/Header';
import HousingFormMain from '../components/HousingFormMain';
import Footer from '../components/Footer';
import PageNotFound from './PageNotFound';

//this is apartament page, it shows the selected apartment
const HousingForm = () => {

    //Using location in order to extract the ID of selected apartment.
    const location = useLocation();
    const urlId = location.pathname.split("/")[2];
    const [apartmentData, setApartmentData] = useState(data);
    //looking for the good apartment and passing data into props
    const selectedApartment = apartmentData.find(apartment => apartment.id === urlId)


    return (
        selectedApartment ?
            <div>
                <Header />
                <HousingFormMain selectedApartment={selectedApartment} />
                <Footer />
            </div>
            :
            <PageNotFound />

    );
};

export default HousingForm;