import { useContext, useEffect, useState } from 'react';
import ApiProvider from '../api-provider';
import Context from '../api-provider/context';
import Card from '../card';
import './index.scss';

const getThumbPath = (h)=>(h.thumbnail.path +'.'+ h.thumbnail.extension)

function renderList(list, h){

    const element = h[list]

    if(element){
        return element.items.map((l)=>( <span key={l.name}>{ l.name } </span> ))
    }

    return null
}

function HeroList(){

    const { MarvelRestClient } = useContext(Context) 
    const [ heros, setHeros ] = useState([])

    function getHeroes(){
       MarvelRestClient
        .getChars({ limit: 4 })
        .then(({ data })=>{
            setHeros(data.results)
        })
    }

    useEffect(()=>{

        if(!heros.length){
            getHeroes()
        }


        console.log(heros)
    })

    

    return (
        <ApiProvider>
            <div className="hero-list-container">
                <div className="grid-label">
                    <small>Personagem</small>
                    <small>Séries</small>
                    <small>Eventos</small>
                </div>
                {
                    heros.map((h)=>(
                        <Card className="hero-card" key={h.id}>
                            <div className="hero-avatar">
                                <img src={getThumbPath(h)} className="avatar" loading="lazy" alt={h.name} />
                                <h3>{ h.name }</h3>
                            </div>
                            <div className="hero-series">
                                { renderList('series', h) }
                            </div>
                            <div className="hero-events">
                                { renderList('events', h) }
                            </div>
                        </Card>
                    ))
                }
            </div>
            
        </ApiProvider>
    )
}

export default HeroList