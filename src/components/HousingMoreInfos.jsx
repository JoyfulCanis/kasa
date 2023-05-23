import React from 'react';

//?components import
import AboutListElement from './AboutListElement';



//This part represents all the detailed informations about the apartments
//SelectedApartment comes from HousingFormMain.jsx

const HousinsMoreInfos = ({ selectedApartment }) => {

    //"Description" concat of 2 strings  | "Equipements" concat of string + array
    const data = [["Description"].concat(selectedApartment.description), ["Equipements", ...selectedApartment.equipments]]

    //isHousing = true because the height is different when AboutListElement is used in the page "About"
    return (
        <ul className='housing__moreInfos'>
            {data.map(
                (element) => (
                    <AboutListElement key={element[0]} title={(element[0])} content={element.slice(1)} isHousing={true} />
                )
            )}


        </ul>
    );
};

export default HousinsMoreInfos;