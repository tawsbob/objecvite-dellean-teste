import Logo from './logo.png';
import './index.scss';

function Header(){
    return (
        <header className="header-container">
            <a className="logo" href="#">
                <img src={Logo} alt="Objective solutions" title="Objective Solutions" />
            </a>
            <div className="user-information">
                <strong>Dellean Santos</strong>
                <span> Teste de Front-end</span>
            </div>
        </header>
    )
}

export default Header;