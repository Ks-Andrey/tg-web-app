import React, { useEffect, useState } from 'react';
import OrderTovar from './orderTovar';

import useHttp from '../../hooks/useHttp/useHttp';
import { useParams } from 'react-router-dom';

import './order.css';

const OrderDetails = ({setError, setLoading}) => {
  const [orderData, setOrderData] = useState(null);

  const { request } = useHttp();
  const { id } = useParams();
 
  useEffect(() => {
    if (id) {
        setLoading(true);
        request(`/api/orders/${id}`)
            .then(res => {
                setOrderData(res.data);
                setLoading(false);
            })
            .catch(error => {
                setError(true);
                setLoading(false);
                console.error(error);
            });
    }
  }, [id, request, setError, setLoading]);

  if (!orderData) {
    return null;
  }

  const { basket, fio, address, phone, dayIndex, orderDate } = orderData;

  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(orderDate));

  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const dayName = daysOfWeek[dayIndex];

  return (
    <div className="order-data__container">
      <h3>Информация о заказе:</h3>
      <div className="order-info__container">
        <ul>
          <li>На какой день: <span id="day">{dayName}</span></li>
          <li>Дата заказа: <span id="date">{formattedDate}</span></li>
        </ul>
      </div>
      <h3>Заказал:</h3>
      <div className="user-info__container">
        <ul>
          <li>ФИО: <span id="fio">{fio}</span></li>
          <li>Номер телефона: <span id="phone">{phone}</span></li>
          <li>Адрес: <span id="address">{address}</span></li>
        </ul>
      </div>
      <h3>Состав заказа: </h3>
      <div className="basket-data__container">
        {basket.map(({ name, price, length }) => (
          <OrderTovar key={name} name={name} price={price} count={length} />
        ))}
      </div>
    </div>
  );
}

export default OrderDetails;
