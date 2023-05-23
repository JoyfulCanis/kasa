import React, { useState } from 'react';

//? display chevron import
import displayChevron from "../assets/images/icons/display-chevron.svg"


//Lists for ABOUT page and HOUSINGFORM, displaying text on click
const AboutListElement = ({ title, content }) => {

    //!"title" and "content" may come from HousingForm page or from About page !

    const [isButtonActive, setIsButtonActive] = useState(false)
    return (

        <li className='aboutList__element'>
            {/* All this divison is listening for CLICK event, setting "isButtonActive", so it displays the next division*/}
            <div onClick={() => {
                isButtonActive ? setIsButtonActive(false) : setIsButtonActive(true)
            }} className='aboutList__element__headBox'>

                <h2 className='aboutList__element__title'>{title}</h2>

                <button
                    className={isButtonActive ? 'aboutList__element__button aboutList__element__button--active' : 'aboutList__element__button'}>

                    <img className='aboutList__element__button-img' src={displayChevron} alt="chevron pour dérouler du texte" />

                </button>

            </div>

            {/* This division is hidden, it is displayed when isButtonActive === true */}
            <div className={`aboutList__element__text ${isButtonActive ? 'aboutList__element__text--visible' : ''}`}>
                {Array.isArray(content) && content.length > 1 ? (
                    <ul className={`housing__moreInfos__height
                    ${isButtonActive ? " housingMobileHeight" : ""}
                    `}>
                        {content.map((element) => (
                            <li key={element}>{element}</li>
                        ))}
                    </ul>
                ) : (
                    <p className={Array.isArray(content)
                        ? `housingHeight
                        ${isButtonActive ? "aboutList__element__paragraphText--active housingMobileHeight" : ""}
                        ` :
                        `aboutList__element__paragraphText 
                         ${isButtonActive ? "aboutList__element__paragraphText--active housingMobileHeight" : ""}`

                    }>
                        {content}
                    </p>
                )}
            </div>


        </li>

    );
};

export default AboutListElement;