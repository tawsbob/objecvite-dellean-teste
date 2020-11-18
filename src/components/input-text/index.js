import search from './icon-search.png';
import { useRef } from 'react'
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

function InputText({ label, placeholder, icon,  onEnter }){

    let input = useRef(null)

    function onKeyUp(e){
        const { target } = e
        if(e.key === 'Enter'){
            onEnter && onEnter(target.value)
        }
        
        //limpar o valor onEnter()
    }

    return (
        <div className="input-text-container">
            { label  && (<label>{ label }</label>) }
            <div className="input-area">
                <input ref={input} type="text" onKeyUp={onKeyUp} placeholder={placeholder} />
                { icon && renderIcon(icon) }
            </div>
        </div>
    )
}

export default InputText;