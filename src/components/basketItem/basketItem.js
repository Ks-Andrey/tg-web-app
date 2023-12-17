import Score from '../score/score';

import './basketItem.css'

const BasketItem = ({name, price, imagelink, length, setBasket, basket, tovarid}) => {
    return (
        <div className="basket__item">
            <div className="image">
                <img src={imagelink} alt="tovar"/>
            </div>
            <div className="data">
                <p>{name}</p>
                <Score score={length} basket={basket} setScore={setBasket} tovarid={tovarid} />
                <div className="price">{price} руб</div>
            </div>
        </div>
    )
}

export default BasketItem;