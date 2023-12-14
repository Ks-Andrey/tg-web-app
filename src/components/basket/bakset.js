import React from "react";
import BasketItem from "../basketItem/basketItem";
import Error from "../error/error";
import SendButton from "../sendBtn/sendBtn";

import './basket.css';

const Basket = ({ basket, setBasket, totalLength, totalPrice }) => {
  const basketTovars = basket.map(item => (
    <BasketItem key={item.id} setBasket={setBasket} basket={basket} {...item} />
  ));

  return (
    <div className="basket__container">
      {basketTovars.length > 0 ? (
        basketTovars
      ) : (
        <Error text='Корзина пуста' />
      )}
      {basketTovars.length > 0 && (
        <SendButton 
            totalLength={totalLength}
            totalPrice={totalPrice}
            basket={basket}
        />
      )}
    </div>
  );
};

export default Basket;
