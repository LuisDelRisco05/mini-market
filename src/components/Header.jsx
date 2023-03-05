import { GiShoppingCart} from 'react-icons/gi';
import Logo from '../assets/logo.jpg'
import { useProduct } from '../hooks/useProduct';

export const Header = () => {

    const { total } = useProduct();

  return (
    <div className='container-header'>
        <div className='header-left'>
            <img
                src={Logo}
                className='logo'
            />
        </div>
        <div className='header-right'>
            <button type='button' className='cart'>
                <GiShoppingCart
                    size={22} 
                    color='white'
                    className='icon-cart'
                />
                <p className='number-cart'>${total}</p>
            </button>
        </div>
    </div>
  )
}
