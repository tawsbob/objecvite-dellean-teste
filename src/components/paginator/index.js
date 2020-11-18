import Button from '../button';
import './index.scss';



function renderButton(content, key, click){
    return (<Button key={key} onClick={click}>{content}</Button>)
}

function renderRange({ from, to, page }, onChange){
    let btns = []
    let interations = (to - from)

    while(interations){

        const number = (from + btns.length)
        const btnClass = number ===  page ? 'active' : ''
        btns.push(<Button className={btnClass} key={number} onClick={()=>(onChange(number))}>{ number }</Button>)

        interations--
    }

    return btns
}

function renderButtons({ total, limit, page }, onChange){

    const totalPages = Math.ceil(total / limit)
    const maxBtnToRender = 6

    const outOfInicialRang = (page < maxBtnToRender-1)

    let from = outOfInicialRang ? 1 : page
    let to = outOfInicialRang ? maxBtnToRender : page + maxBtnToRender


    const isLast = (totalPages === page)
    const isFirt = page === 1

    if(totalPages - maxBtnToRender > 1 && page > totalPages - maxBtnToRender){
        from = (totalPages - maxBtnToRender)
        to = totalPages + 1
    }

    if(to >totalPages){
        to = totalPages+1
    }

    let btns = renderRange({ from, to, page }, onChange)

    if( page > maxBtnToRender-2 ){
        
        const fistPageButton = !isFirt ? renderButton('«','first',()=>(onChange(1))) : null
        const firstPrevPage = !isFirt ? renderButton('‹','prev-page',()=>(onChange(page-1))) : null

        btns = [  fistPageButton, firstPrevPage,  ...btns ]

    }  
    
    const lastPageButton = !isLast ? renderButton('»','last',()=>(onChange(totalPages))) : null
    const nextPage =  !isLast ? renderButton('›','next-page',()=>(onChange(page+1))) : null
    btns = [  ...btns, nextPage, lastPageButton ]

    return btns

}

function Paginator({ reference, onChange }){

    return (
        <div className="paginator-container">
            <div className="wrapper">
                { renderButtons( reference, onChange ) }
            </div>
        </div>
    )
}

export default Paginator;