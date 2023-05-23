import React, { useState } from 'react';

//?array including "ABOUT" informations import
import data from '../assets/data/aboutArray.json'


//?components import
import AboutListElement from './AboutListElement';

//Map for elements
const AboutList = () => {
    //using this makes the code more readable
    const [aboutArray, setAboutArray] = useState(data)

    return (
        <section>
            <ul className='aboutList'>
                {
                    aboutArray.map(
                        (element) => (
                            <AboutListElement key={element.title}
                                title={element.title}
                                content={element.content}
                                isHousing={false} />
                        )
                    )
                }
            </ul>
        </section>
    );
};

export default AboutList;