import React, { useEffect, useState } from 'react';
import data from '../assets/data/db.json'
import Card from './Card';
const HomeSection = () => {


    
    const [articleData, setArticleData] = useState(data)
    //! A implémenter et à configurer lors du déploiement du back, ne pas oublier de changer la const du dessus//
    // const getData = () => {
    //     fetch("adress").then((res) => res.json()).then((data) => setArticleData(data)).catch((err) => console.log(err))
    // }
    // useEffect(() => getData(), [])
    //! A implémenter et à configurer lors du déploiement du back, ne pas oublier de changer la const du dessus//
console.log(data)

    return (
        <section className='homeSection'>
            <div className='homeSection__cardBox'>
                {
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