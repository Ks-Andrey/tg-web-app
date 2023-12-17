import Score from '../score/score';

import './tovar.css'

const Tovar = ({tovarid, name, imagelink, price, onAddToBasket, basket, setBasket}) => {
    const basketItem = basket.find(item => item.tovarid === tovarid);

    return (
        <div key={tovarid} className="catalog__card">
            <div className="image"><img src={imagelink} alt="tovar"/></div>
            <div className='data'>
                <p>{name}</p>
                <div className="price">{price} руб</div>
                {basketItem ? 
                    <Score 
                        score={basketItem.length} 
                        setScore={setBasket}
                        tovarid={tovarid}
                        basket={basket}
                    /> : 
                    <button 
                        className='btn btn-primary'
                        onClick={() => onAddToBasket(tovarid)
                    }>В корзину</button>}
            </div>
        </div>
    )
}

export default Tovar;