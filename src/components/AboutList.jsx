import React, { useState } from 'react';
import data from '../assets/data/aboutArray.json'
import AboutListElement from './AboutListElement';


const AboutList = () => {

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