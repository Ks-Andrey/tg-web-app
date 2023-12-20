import { Route, Routes } from 'react-router-dom';

import './App.css';

import Catalog from '../catalog/catalog';
import Basket from '../basket/bakset';

import { useState, useEffect } from 'react';
import useHttp from '../../hooks/useHttp/useHttp';

import Loading from '../loading/loading';
import Error from '../error/error';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [tovars, setTovars] = useState([]);
  const [basket, setBasket] = useState([]);

  const { request } = useHttp();
  
  useEffect(() => {
    const matchResult = window.location.href.match(/day\/(.*)/g);
    const id = matchResult ? matchResult[0]?.replace('day/', '') : null;
    
    const getTovars = (id) => {
      setLoading(true);
      request(id)
        .then(res => {
          const tovars = res?.data?.tovars.map(({ name, price, imagelink, length, tovarid }) => ({
            name,
            price,
            image: imagelink,
            length,
            id: tovarid,
          }));

          if (tovars) {
            setTovars(tovars);          
          }
  
          setLoading(false);
        })
        .catch(error => {
          console.error(error.message);
          setError(true);
          setLoading(false);
        })
    }
  
    if (id && request) {
      getTovars(id);
    }
  }, [request]);
  
  
  const { totalPrice, totalLength } = basket.reduce(
    (acc, { price, length }) => ({
      totalPrice: acc.totalPrice + price * length,
      totalLength: acc.totalLength + length,
    }),
    { totalPrice: 0, totalLength: 0 }
  );
  
  return (
    <div className='container'>
      <Routes>
        <Route path='/day/:id' element={
          <Catalog 
            totalPrice={totalPrice}
            totalLength={totalLength}
            tovars={tovars}
            setBasket={setBasket}
            basket={basket}
            loading={loading}
            error={error}
          />} 
        />
        <Route path='/basket' element={
          <Basket
            basket={basket}
            setBasket={setBasket}
            totalPrice={totalPrice}
            totalLength={totalLength}
          />
        } />
      </Routes>
      {loading && <Loading />}
      {error && <Error text='Ошибка загрузки'/>}
    </div>
  );
}

export default App;
