import './index.scss';

function Card({ children, className }){
    return (
        <div className={`card-container ${className}`}>
            { children }
        </div>
    )
}

export default Card;