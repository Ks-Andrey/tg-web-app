import Score from '../score/score';

import './tovar.css'

const Tovar = ({id, name, image, price, onAddToBasket, basket, setBasket}) => {
    const basketItem = basket.find(item => item.id === id);

    return (
        <div key={id} className="catalog__card">
            <div className="image"><img src={image} alt="tovar"/></div>
            <div className='data'>
                <p>{name}</p>
                <div className="price">{price} руб</div>
                {basketItem ? 
                    <Score 
                        score={basketItem.length} 
                        setScore={setBasket}
                        id={id}
                        basket={basket}
                    /> : 
                    <button 
                        className='btn btn-primary'
                        onClick={() => onAddToBasket(id)
                    }>В корзину</button>}
            </div>
        </div>
    )
}

export default Tovar;