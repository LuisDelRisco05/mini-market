import { useState } from 'react'
import { useProduct } from "../hooks/useProduct"
import { Stock } from './Stock';


export const Products = ({ counter }) => {

  const { products, product,  startAddProduct } = useProduct();

  const handleClick = item => {
    console.log('item', item);
    startAddProduct(item)
  }

  return (
    <div className="products">
        {products.map(item => (
            <button 
              key={item.id} 
              className={`btn-item ${product.id === item.id ? 'active' : 'inactive' }`}
              type="button"
              onClick={() => handleClick(item)}
            >
              { product.id === item.id && <Stock position={'2rem'} unit={ counter } />}
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
