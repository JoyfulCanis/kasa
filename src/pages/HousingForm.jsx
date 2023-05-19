import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../assets/data/db.json'

import Header from '../components/Header';
import HousingFormMain from '../components/HousingFormMain';
import Footer from '../components/Footer';
import PageNotFound from './PageNotFound';

const HousingForm = () => {
    const location = useLocation();
    const urlId = location.pathname.split("/")[2];

    const [apartmentData, setApartmentData] = useState(data);
    const selectedApartment = apartmentData.find(apartment => apartment.id === urlId)
    return (
        selectedApartment?
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