import React from 'react';
import AboutListElement from './AboutListElement';

const HousinsMoreInfos = ({ selectedApartment }) => {
    const data = [["Description"].concat(selectedApartment.description), ["Equipements", ...selectedApartment.equipments]]
    console.log(data[0])
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