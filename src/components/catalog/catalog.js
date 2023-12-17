import Tovar from "../tovar/tovar";
import BasketButton from '../basketBtn/basketBtn';

import useTelegram from "../../hooks/useTelegram/useTelegram";
import { useParams } from "react-router-dom";

import './catalog.css'
import { useEffect } from "react";

const Catalog = ({ tovars, setBasket, basket, totalLength, totalPrice, getTovars}) => {
    const { onExpand } = useTelegram();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getTovars(id);
        }
    }, [id]);

    const onAddToBasket = (tovarid) => {
        const selectedTovar = tovars.find(tovar => tovar.tovarid === tovarid);
        const isAdded = basket.find(tovar => tovar.tovarid === tovarid);

        if (isAdded) {
            setBasket(basket.map(tovar => (tovar.tovarid === tovarid ? { ...tovar, length: tovar.length + 1 } : tovar)));
        } else {
            setBasket([...basket, { ...selectedTovar, length: 1 }]);
        }

        onExpand();
    }

    const tovarsArray = tovars.map(tovar => {
        const { tovarid } = tovar;
        return <Tovar key={tovarid} {...tovar} basket={basket} setBasket={setBasket} onAddToBasket={() => onAddToBasket(tovarid)} />;
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
