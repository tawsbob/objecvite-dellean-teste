import { Template, InputText, HeroList } from '../../components';
import './index.scss';


function Home(){
    return (
        <Template>
            <section className="home-page-container wrapper">
                <h1>Busca de personagens</h1>
                <InputText label="Nome do personagem" placeholder="Search" icon="search" />
                <HeroList />
            </section>
        </Template>
    )
}

export default Home