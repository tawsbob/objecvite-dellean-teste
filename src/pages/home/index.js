import { useState } from 'react';
import { Template, InputText, HeroList } from '../../components';
import './index.scss';


function Home(){

    const [ searchTerm, setSearchTerm ] = useState('spider')

    function onInputEnter( value ){
        setSearchTerm( value )
    }

    return (
        <Template>
            <section className="home-page-container">
                
                <div className="wrapper">
                    <h1>Busca de personagens</h1>
                    <InputText label="Nome do personagem" onEnter={ onInputEnter } placeholder="Search" icon="search" />
                </div>
                
                <HeroList searchTerm={searchTerm} />
            </section>
        </Template>
    )
}

export default Home