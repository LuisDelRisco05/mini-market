import { GiShoppingCart} from 'react-icons/gi';
import Logo from '../assets/logo.jpg'
import { useProduct } from '../hooks/useProduct';

export const Header = () => {

    const { total, cart, shoppingCart, startActiveShoppingCart, startDesactiveShoppingCart } = useProduct();



  return (
    <div className='container-header'>
        <div className='header-left'>
            <img
                src={Logo}
                className='logo'
            />
        </div>
        <div className='header-right'>
            {
                !shoppingCart
                    ?
                        (
                            <button 
                                type='button' 
                                className='cart'
                                onClick={ startActiveShoppingCart }
                            >
                                <GiShoppingCart
                                    color='white'
                                    className='icon-cart'
                                />
                                <p className='number-cart'>${total}</p>
                            </button>
                        )
                    :
                        (
                            <div className='cart-active'>
                                <GiShoppingCart
                                    color='#A41BB9'
                                    className='icon-cart'
                                />
                                <p className='number-cart-active'>${total}</p>
                                <button
                                    type='button'
                                    className='close-cart'
                                    onClick={ startDesactiveShoppingCart }
                                >
                                    x
                                </button>
                            </div>

                        )
            }
            {
                (shoppingCart && cart.length > 0)
                    &&   (
                            <div>

                            </div>
                        )
            }
        </div>
    </div>
  )
}
