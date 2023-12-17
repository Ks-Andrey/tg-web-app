import React from "react";
import BasketItem from "../basketItem/basketItem";
import Error from "../error/error";
import SendButton from "../sendBtn/sendBtn";

import { useNavigate } from 'react-router-dom'

import './basket.css';

const Basket = ({ basket, setBasket, totalLength, totalPrice }) => {
  const navigate = useNavigate();

  const basketTovars = basket.map(item => (
    <BasketItem key={item.tovarid} setBasket={setBasket} basket={basket} {...item} />
  ));

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <>
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
        <button onClick={handleBack} className="back__btn">Вернуться в каталог</button>
      </div>
    </>
  );
};

export default Basket;
