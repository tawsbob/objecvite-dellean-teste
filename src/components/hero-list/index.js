import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from '../loader';
import Paginator from '../paginator';
import Context from '../api-provider/context';
import Card from '../card';
import { getThumbPath } from '../../helpers';
import './index.scss';

function renderItemList(l){  
        return (<span key={l.name}>{ l.name  } </span>)
}

function renderList(list, h){
    const element = h[list]
    if(element){
        if(element.items.length){
            const itens =  element.items.map(renderItemList)
            const limited = itens.slice(0,3)
            return limited

        } else {
            return (<span>Sem Informação</span>)
        }
    }
    return null
}

function HeroList({ searchTerm }){

    let history = useHistory()

    const { MarvelRestClient } = useContext(Context) 
    const [ heros, setHeros ] = useState([])
    const [ pagination, setPagination ] = useState({ limit: 4  })
    const [ loading, setLoading ] = useState(false)

    
    function setPaginationState(props){
        const { limit } = pagination
        const { offset } = props
        const page = offset === 0 ? 1 : (offset / limit) + 1
        setPagination({ ...pagination, ...props, page })
    }

    function onPaginateChange( page ){
        const { limit } = pagination
        const offset = page === 1 ? 0 : ((page * limit) - limit)
        setPaginationState({ offset })
        setHeros([])
    }

    function getHeroes(){

        const { total, page, ...paginationParams } = pagination

        const queryStringParams = {
            ...paginationParams,
            ...(searchTerm && { nameStartsWith: searchTerm })
        }

        setLoading(true)

       MarvelRestClient
        .getChars(queryStringParams)
        .then(({ data })=>{
            console.log(data)
            
            const { offset, total } = data
            setPaginationState({ offset, total })
            setHeros(data.results)
            setLoading(false)
        })
    }

    useEffect(()=>{
        if(!heros.length && !loading){
            getHeroes()
        }
    })

    
    const displayPagination = ((pagination.total/pagination.limit) > 1)
    const hasHeros = (heros.length > 0)

    return (
            <div className="hero-list-container">
                <div className="wrapper">
                    {
                        hasHeros && (
                        <div className="grid-label">
                            <small>Personagem</small>
                            <small>Séries</small>
                            <small>Eventos</small>
                        </div>
                        )
                    }

                    {
                        heros.map((h)=>(
                            <Card className="hero-card" key={h.id} onClick={()=>{ history.push(`/hero/${h.id}`) }} >
                                <div className="hero-avatar">
                                    <img src={getThumbPath(h)} className="avatar" loading="lazy" alt={h.name} />
                                    <h3>{ h.name }</h3>
                                </div>
                                <div className="hero-list">
                                    { renderList('series', h) }
                                </div>
                                <div className="hero-list">
                                    { renderList('events', h) }
                                </div>
                            </Card>
                        ))
                    }
                    { loading && (<Loader />) }
                </div>

                {
                   displayPagination && (<Paginator reference={pagination} onChange={onPaginateChange} />)
                }
                
            </div>
    )
}

export default HeroList