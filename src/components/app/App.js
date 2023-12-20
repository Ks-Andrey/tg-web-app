import { Route, Routes } from 'react-router-dom';

import './App.css';

import Catalog from '../catalog/catalog';
import Basket from '../basket/bakset';

import { useCallback, useState } from 'react';
import useHttp from '../../hooks/useHttp/useHttp';

import Loading from '../loading/loading';
import Error from '../error/error';
import OrderDetails from '../order/order';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [tovars, setTovars] = useState([]);
  const [basket, setBasket] = useState([]);

  const { request } = useHttp();

  const getTovars = useCallback((id) => {
    setLoading(true);
    request('/api/tovars/' + id)
      .then(res => {
        const tovars = res?.data?.tovars.map(({ name, price, imagelink, length, tovarid }) => ({
          name,
          price,
          image: imagelink,
          length,
          id: tovarid,
        }));

        setLoading(false);

        if (tovars) {
          setTovars(tovars);          
        }
      })
      .catch(error => {
        console.error(error.message);
        setError(true);
        setLoading(false);
      })
  }, [request])
  
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
            getTovars={getTovars}
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
        <Route path='/orders/:id' element={
          <OrderDetails 
            setError={setError}
            setLoading={setLoading}
          />
        }/>
        <Route path='/' element={<Error text={'Страница не найдена!'}/>}/>
      </Routes>
      {loading && <Loading />}
      {error && <Error text='Ошибка загрузки'/>}
    </div>
  );
}

export default App;
