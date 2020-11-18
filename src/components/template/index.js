import Header from '../header';
import './index.scss';

function Template({ children, backgroundImage }){
    return (
        <div className="template-container" style={{ backgroundImageUrl: `url(${backgroundImage})` }}>
            <Header />
            { children }
        </div>
    )
}

export default Template;