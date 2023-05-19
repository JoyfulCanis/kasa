import React from 'react';
import Stars from './Stars';

const HousingGeneralInfos = ({ selectedApartment }) => {

    const title = selectedApartment.title;
    const location = selectedApartment.location;
    const firstName = selectedApartment.host.name.split(" ")[0];
    const lastName = selectedApartment.host.name.split(" ")[1];
    const hostPicture = selectedApartment.host.picture;
    const tags = selectedApartment.tags;
    const fullStars = selectedApartment.rating;

    console.log(selectedApartment)
    return (


        <div>
            <div className='housingForm__generalInfos'>

                <div className='housingForm__generalInfos___left'>

                    <h1 className='housingForm__generalInfos__title'>{title}</h1>
                    <address className='housingForm__generalInfos__address'>{location}</address>

                </div>

                <div className='housingForm__generalInfos__right'>

                    <p className='housingForm__generalInfos__name'>
                        {firstName}<br />{lastName}</p>

                    <div className='housingForm__generalInfos__profilePicContainer'>
                        <img className='housingForm__generalInfos__profilePic'
                            src={hostPicture} alt={firstName + " " + lastName} />
                    </div>

                </div>

            </div>
            <div className='housingForm__generalInfos__tagsAndStars'>
                <div className='housingForm__generalInfos__tagContainer'>
                    {
                        tags &&
                        tags.map((tag) =>
                            <span className='housingForm__generalInfos__tag' key={tag}>{tag}</span>
                        )
                    }
                </div>

                <Stars fullStars={fullStars}/>

            </div>

        </div>
    );
};

export default HousingGeneralInfos;