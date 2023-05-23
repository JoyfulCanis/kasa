import React from 'react';

//?componenets import
import Stars from './Stars';


//This component includes general information about the apartment, such as its location, tags, the name and picture of the host, and so on.

const HousingGeneralInfos = ({ selectedApartment }) => {
    //creating this in order to avoid messy code
    const title = selectedApartment.title;
    const location = selectedApartment.location;
    const firstName = selectedApartment.host.name.split(" ")[0];
    const lastName = selectedApartment.host.name.split(" ")[1];
    const hostPicture = selectedApartment.host.picture;
    const tags = selectedApartment.tags;
    const fullStars = selectedApartment.rating;

    return (


        <div>

            <div className='housingForm__generalInfos'>
                {/*--------------This is the LEFT PART of general informations in the page--------------*/}
                <div className='housingForm__generalInfos___left'>

                    <h1 className='housingForm__generalInfos__title'>
                        {title}</h1>
                    <address className='housingForm__generalInfos__address'>
                        {location}</address>

                    <div className='housingForm__generalInfos__tagContainer'>
                        {
                            tags &&
                            tags.map((tag) =>
                                <span className='housingForm__generalInfos__tag' key={tag}>{tag}</span>
                            )
                        }
                    </div>

                </div>


                {/*--------------This is the RIGHT PART of general informations in the page--------------*/}
                <div className='housingForm__generalInfos__right'>

                    <div className='housingForm__generalInfos__nameAndPic'>

                        <p className='housingForm__generalInfos__name'>
                            {firstName}<br />{lastName}</p>

                        <div className='housingForm__generalInfos__profilePicContainer'>
                            <img className='housingForm__generalInfos__profilePic'
                                src={hostPicture} alt={firstName + " " + lastName} />
                        </div>

                    </div>


                    <Stars fullStars={fullStars} />

                </div>

            </div>
            <div className='housingForm__generalInfos__tagsAndStars'>


            </div>

        </div>
    );
};

export default HousingGeneralInfos;