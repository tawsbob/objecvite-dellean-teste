import './index.scss';

function Card({ children, className, ...rest }){
    return (
        <div className={`card-container ${className}`} {...rest}>
            { children }
        </div>
    )
}

export default Card;