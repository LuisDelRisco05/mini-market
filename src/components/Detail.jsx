import React, { useState } from 'react';
import { useProductStore } from '../hooks/useProductStore';
import { OneItem, ItemList, Payment } from './';
import PropTypes from 'prop-types';


export const Detail = ({ counter, setCounter }) => {

    const [ animation, setAnimation ] = useState(false);

    const { 
        product, 
        cart, 
        shoppingCart, 
        total, 
    } = useProductStore();

    const numero = total;
    const numeroFormateado = numero.toString().replace(/\./g, '') + '00';

  return (
    <div className="container-detail">
        { Object.keys(product).length === 0 && !shoppingCart &&  <p className="text-right"></p>}
        { Object.keys(product).length > 0 && !shoppingCart
            &&
                (   
                   <OneItem counter={ counter } setCounter={ setCounter } />
                )
        }
        {(shoppingCart && cart.length > 0 )
            &&  (
                    <ItemList animation={ animation } setAnimation={ setAnimation } /> 
                )
        }
        { shoppingCart 
            &&  (
                    <div className="container-cart-total">
                        <div className="cart-total">
                            <p className="cart-total-text">Total:</p>
                            <p className="cart-total-value">${total}</p>
                        </div>
                    </div>
                )
        }

        {(shoppingCart && cart.length > 0 )
            &&  (
                    <Payment
                        publicKey="pub_test_hrKeZIq39IkiyTviEjBMHcYL4cLNuUxR"
                        currency="COP"
                        amountInCents={numeroFormateado}
                        reference="4XMPGKWWPKWQ"
                        signatureIntegrity="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
                    />
                )
        }
        
    </div>
  )
}

Detail.propTypes = {
    counter: PropTypes.number.isRequired, 
    setCounter: PropTypes.func.isRequired, 
};

