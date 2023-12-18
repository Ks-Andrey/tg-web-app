import Score from '../score/score';

import './basketItem.css'

const BasketItem = ({name, price, image, length, setBasket, basket, id}) => {
    return (
        <div className="basket__item">
            <div className="image">
                <img src={image} alt="tovar"/>
            </div>
            <div className="data">
                <p>{name}</p>
                <Score score={length} basket={basket} setScore={setBasket} id={id} />
                <div className="price">{price} руб</div>
            </div>
        </div>
    )
}

export default BasketItem;