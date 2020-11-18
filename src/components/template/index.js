import Header from '../header';
import './index.scss';

function Template({ children }){
    return (
        <div className="template-container">
            <Header />
            { children }
        </div>
    )
}

export default Template;