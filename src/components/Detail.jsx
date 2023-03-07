import { useEffect, useState } from 'react';
import { useProductStore } from '../hooks/useProductStore';
import { OneItem, ItemList, Payment } from './';


export const Detail = ({ counter, setCounter }) => {

    const [ animation, setAnimation ] = useState(false);

    const { 
        product, 
        cart, 
        shoppingCart, 
        total, 
    } = useProductStore();


    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://checkout.wompi.co/widget.js";
    //     script.async = true;
    //     script.setAttribute("data-render", "button");
    //     script.setAttribute("data-public-key", "pub_test_hrKeZIq39IkiyTviEjBMHcYL4cLNuUxR");
    //     script.setAttribute("data-currency", "COP");
    //     script.setAttribute("data-amount-in-cents", "4950000");
    //     script.setAttribute("data-reference", "4XMPGKWWPKWQ");
    //     script.setAttribute("data-signature:integrity", "37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5");
    //     document.body.appendChild(script);
    // }, []);

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
                        amountInCents="4950000"
                        reference="4XMPGKWWPKWQ"
                        signatureIntegrity="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
                    />
                )
        }
        
    </div>
  )
}

