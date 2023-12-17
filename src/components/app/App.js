import { Route, Routes } from 'react-router-dom';

import './App.css';

import Catalog from '../catalog/catalog';
import Basket from '../basket/bakset';

import { useState } from 'react';
import useHttp from '../../hooks/useHttp/useHttp';
import Loading from '../loading/loading';
import Error from '../error/error';
// import { tovarsData } from '../../config';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [tovars, setTovars] = useState([]);
  const [basket, setBasket] = useState([]);

  const { request } = useHttp();

  const getTovars = (id) => {
    setLoading(true);
    request(id)
      .then(items => {
        setTovars(items);
        setLoading(false);
      })
      .catch(error => {
        console.error(error.message);
        setError(true);
        setLoading(false);
      })
  }
  
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
            getTovars={getTovars}
            totalPrice={totalPrice}
            totalLength={totalLength}
            tovars={tovars}
            setBasket={setBasket}
            basket={basket}
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
