import search from './icon-search.png';
import { useEffect, useRef } from 'react'
import './index.scss'

const icons = {
    search
}

function renderIcon(icon){
    if( icons[icon]){
        return <img src={icons[icon]} className="icon" alt="icon" />
    }  
    return null
}

function InputText({ label, placeholder, icon,  ref }){

    let input = useRef(null)

    //useEffect()

    return (
        <div className="input-text-container">
            { label  && (<label>{ label }</label>) }
            <div className="input-area">
                <input ref={input} type="text" placeholder={placeholder} />
                { icon && renderIcon(icon) }
            </div>
        </div>
    )
}

export default InputText;