import React,{ useEffect, useState } from 'react';
import { Detail, Header, Products } from './';
import { dataStorage } from '../helpers/dataStorage';
import { useProductStore } from '../hooks/useProductStore';
import PropTypes from 'prop-types';

export const Home = () => {

    const [ counter, setCounter ] = useState(1)

    const { product, shoppingCart, cart, total } = useProductStore();
    const { saveDataStorage, getDataStorage } = dataStorage();
  
    useEffect( () => {
      getDataStorage()
    }, []);
  
    useEffect( () => {
      
      if(cart.length > 0){
        saveDataStorage(cart, total) 
      }
  
    }, [cart]);

  return (
    <>
        <Header />

        <div className='container-body'>
            
            <div className='product-left'>
                <h4 className='title-store'>Store</h4>
                <hr className='separator' />
                <Products counter={ counter } />
            </div>

            <div className='product-right'>
                <h4 className='title-store'>
                { Object.keys(product)?.length > 0 && !shoppingCart ? 'Product' : ''}
                { shoppingCart && 'Shopping Cart'}
                </h4>
                <hr className='separator' />
                <Detail counter={ counter } setCounter={ setCounter } />
            </div>

        </div>
    </>
  )
}

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  shoppingCart: PropTypes.bool.isRequired,
  cart: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  saveDataStorage: PropTypes.func.isRequired,
  getDataStorage: PropTypes.func.isRequired
}
