import React from "react";
import BasketItem from "../basketItem/basketItem";
import Error from "../error/error";
import SendButton from "../sendBtn/sendBtn";

import { useNavigate } from 'react-router-dom'
import useTelegram from "../../hooks/useTelegram/useTelegram";

import back from '../../assets/images/back.svg';

import './basket.css';

const Basket = ({ basket, setBasket, totalLength, totalPrice }) => {
  const navigate = useNavigate();

  const { user } = useTelegram();

  const basketTovars = basket.map(item => (
    <BasketItem key={item.id} setBasket={setBasket} basket={basket} {...item} />
  ));

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <>
      <div className="catalog__header">
        <button onClick={handleBack} className="back__btn"><img src={back} alt="back"/></button>
        <div className="username">{user.username}</div>
      </div>
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
    </>
  );
};

export default Basket;
