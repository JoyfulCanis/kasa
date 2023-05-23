import React, { useState } from 'react';
import data from '../assets/data/db.json'
import Card from './Card';



const HomeSection = () => {

    //Setting data with the intent to use it for card informations

    const [articleData, setArticleData] = useState(data)

    //! To implement and configure during the back-end deployment, don't forget to change the constant above.//
    // const getData = () => {
    //     fetch("adress").then((res) => res.json()).then((data) => setArticleData(data)).catch((err) => console.log(err))
    // }
    // useEffect(() => getData(), [])
    //! To implement and configure during the back-end deployment, don't forget to change the constant above.//

    return (
        <section className='homeSection'>
            <div className='homeSection__cardBox'>
                {

                    //Map to create a Card for each apartment and sending related informations for each child
                    articleData && articleData
                        .map((item) =>
                            <Card key={item.id}
                                cover={item.pictures[0]}
                                h2={item.title}
                                urlId={item.id}
                            />)

                }
            </div>
        </section>
    );
};

export default HomeSection;