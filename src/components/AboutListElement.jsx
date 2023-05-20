import React, { useState } from 'react';
import displayChevron from "../assets/images/icons/display-chevron.svg"

const AboutListElement = ({ title, content, isHousing }) => {

    const [isButtonActive, setIsButtonActive] = useState(false)
    return (

        <li className='aboutList__element'>
            <div onClick={() => {
                isButtonActive ? setIsButtonActive(false) : setIsButtonActive(true)
            }} className='aboutList__element__headBox'>

                <h2 className='aboutList__element__title'>{title}</h2>

                <button
                    className={isButtonActive ? 'aboutList__element__button aboutList__element__button--active' : 'aboutList__element__button'}>

                    <img className='aboutList__element__button-img' src={displayChevron} alt="chevron pour dérouler du texte" />

                </button>

            </div>

            <div className={`aboutList__element__text ${isButtonActive ? 'aboutList__element__text--visible' : ''}`}>
                {Array.isArray(content) && content.length > 1 ? (
                    <ul className="housing__moreInfos__height">
                        {content.map((element) => (
                            <li key={element}>{element}</li>
                        ))}
                    </ul>
                ) : (
                    <p className={Array.isArray(content)
                        ? "housingHeight" :
                        `aboutList__element__paragraphText 
                         ${isButtonActive ? "aboutList__element__paragraphText--active" : ""}
                         ${isHousing ? " housingHeight" : ""}`

                    }>
                        {content}
                    </p>
                )}
            </div>


        </li>

    );
};

export default AboutListElement;