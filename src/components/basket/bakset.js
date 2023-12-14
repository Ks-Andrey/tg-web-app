import BasketItem from "../basketItem/basketItem";
import Error from "../error/error";

import './basket.css'

const Basket = ({basket, setBasket}) => {
    const basketTovars = basket.map(item => <BasketItem key={item.id} setBasket={setBasket} basket={basket} {...item} />);

    return (
        <div className="basket__container">
            {basketTovars.length > 0 ? basketTovars : 
            <Error text='Корзина пуста'/>}
        </div>
    )
}

export default Basket;