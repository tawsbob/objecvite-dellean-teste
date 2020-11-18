import './index.scss';
function Button({ children, className, ...props }){

    const componentClass = className ? `button ${className}` : 'button'

    return (
        <button className={componentClass} { ...props } >{ children }</button>
    )
}

export default Button;