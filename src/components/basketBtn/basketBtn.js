import { Link } from 'react-router-dom';
import './basketBtn.css'

const BasketButton = ({totalLength, totalPrice}) => {
    return <Link to="/basket" className="basket__btn">{totalLength} товаров на {totalPrice} руб</Link>;
      
}

export default BasketButton;