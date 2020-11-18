import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Template } from '../../components';
import Context from '../../components/api-provider/context';
import { getThumbPath } from '../../helpers';
import './index.scss';


function Hero(){

    let { id } = useParams();
    const { MarvelRestClient } = useContext(Context) 
    const [ hero, setHero ] = useState(null)

    function load(){
        MarvelRestClient
            .getChat( id )
            .then(({ data })=>{
                setHero(data.results[0])
            })
    }

    useEffect(()=>{
        load()
    })

    const imageUrl = hero  ? getThumbPath(hero) : ''

    return (
        <Template backgroundImage={imageUrl}> 
            <section className="hero-page-container">
                { hero && (
                    <div className="wrapper">
                        <h1>{ hero.name }</h1>
                    </div>
                ) }
            </section>
        </Template>
    )
}

export default Hero