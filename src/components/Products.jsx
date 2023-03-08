import React, { useState } from 'react'
import { useProductStore } from '../hooks/useProductStore';
import { Stock } from './Stock';
import PropTypes from 'prop-types';


export const Products = ({ counter }) => {

  const [ animation, setAnimation ] = useState(false);

  const { products, product, startAddProduct } = useProductStore();


  const handleClick = item => {
    setAnimation(true);
    startAddProduct(item)

    setTimeout(() => {
      setAnimation(false);
    }, 1500);

  }

  return (
    <div className="products">
        {products.map(item => (
            <button 
              key={item.id} 
              className={`btn-item ${ product.id === item.id && animation && 'animate__animated animate__pulse'} ${product.id === item.id ? 'active' : 'inactive' }`}
              type="button"
              onClick={() => handleClick(item)}
            >
              { product.id === item.id && <Stock position={'1.5rem'} unit={ counter } />}
                <img 
                    src={item.id} 
                    alt={item.name}
                    className="pop" 
                />
            </button> 
        ))}
    </div>
  )
}

Products.propTypes = {
  counter: PropTypes.number.isRequired
};
