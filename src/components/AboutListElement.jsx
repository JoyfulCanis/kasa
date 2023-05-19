import React, { useState } from 'react';
import displayChevron from "../assets/images/icons/display-chevron.svg"

const AboutListElement = ({ title, content }) => {

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
            {
                <p className={`aboutList__element__text ${isButtonActive ? 'aboutList__element__text--visible' : ''} ${Array.isArray(content)?"housing__moreInfos__height":""}`}>
                    {Array.isArray(content) ?
                        <ul>{
                            content.map((element) => (
                                <li key={element}>{element}</li>
                            ))}
                        </ul>
                        :
                        content
                    }
                </p>
            }

        </li>

    );
};

export default AboutListElement;