import Tovar from "../tovar/tovar";
import BasketButton from '../basketBtn/basketBtn';

import useTelegram from "../../hooks/useTelegram/useTelegram";

import './catalog.css'

const Catalog = ({ tovars, setBasket, basket, totalLength, totalPrice}) => {
    const { onExpand } = useTelegram();

    const onAddToBasket = (id) => {
        const selectedTovar = tovars.find(tovar => tovar.id === id);
        const isAdded = basket.find(tovar => tovar.id === id);

        if (isAdded) {
            setBasket(basket.map(tovar => (tovar.id === id ? { ...tovar, length: tovar.length + 1 } : tovar)));
        } else {
            setBasket([...basket, { ...selectedTovar, length: 1 }]);
        }

        onExpand();
    }

    const tovarsArray = tovars.map(tovar => {
        const { id } = tovar;
        return <Tovar key={id} {...tovar} basket={basket} setBasket={setBasket} onAddToBasket={() => onAddToBasket(id)} />;
    });

    return (
        <>
            <div className="catalog__container">
                {tovarsArray}
            </div>
            { basket.length === 0 ? null : <BasketButton totalLength={totalLength} totalPrice={totalPrice} /> }
        </>
    );
}

export default Catalog;
