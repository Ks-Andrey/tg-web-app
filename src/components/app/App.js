import { Route, Routes } from 'react-router-dom';

import './App.css';

import Catalog from '../catalog/catalog';
import Basket from '../basket/bakset';
import BasketButton from '../basketBtn/basketBtn';

import { useEffect, useState } from 'react';
// import useHttp from '../../hooks/useHttp/useHttp';
import Loading from '../loading/loading';
// import Error from '../error/error';
import { tovarsData } from '../../config';

function App() {
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(false);

  const [tovars, setTovars] = useState([]);
  const [basket, setBasket] = useState([]);

  // const { request } = useHttp();

  useEffect(() => {
    setTovars(tovarsData)
    setLoading(false)
    // setLoading(true);
    // request()
    //   .then(items => {
    //     setTovars(items);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     console.error(error.message);
    //     setError(true);
    //     setLoading(false);
    //   })
  }, []);

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={
          <Catalog 
            tovars={tovars}
            setBasket={setBasket}
            basket={basket}
          />} 
        />
        <Route path='/basket' element={
          <Basket
            basket={basket}
            setBasket={setBasket}
          />
        } />
      </Routes>
      { basket.length === 0 ? null : <BasketButton basket={basket} /> }
      {loading && <Loading />}
      {/* {error && <Error text='Ошибка загрузки'/>} */}
    </div>
  );
}

export default App;
