import { Link } from 'react-router-dom';
import './basketBtn.css'

const BasketButton = ({basket}) => {
    const { totalPrice, totalLength } = basket.reduce(
        (acc, { price, length }) => ({
          totalPrice: acc.totalPrice + price * length,
          totalLength: acc.totalLength + length,
        }),
        { totalPrice: 0, totalLength: 0 }
    );
      
    return <Link to="/basket" className="basket__btn">{totalLength} товаров на {totalPrice} руб</Link>;
      
}

export default BasketButton;