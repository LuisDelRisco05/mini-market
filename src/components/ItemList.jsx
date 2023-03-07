import { Stock } from "./Stock";
import {BsFillTrash3Fill} from "react-icons/bs";
import { useProductStore } from "../hooks/useProductStore";


export const ItemList = ({ animation, setAnimation}) => {

    const { cart, startDeleteItem } = useProductStore();


    const handleClickTrash = (product) => {

        setAnimation(true);

        setTimeout(() => {
            const newCart = cart.filter( item => item.id !== product.id );
            startDeleteItem(newCart, product.unit * product.price)
            setAnimation(false);
        }, 1500);
      
    }

  return (
            <div className={`${ cart.length > 3 && 'scroll-cart'}`}>
                {
                    cart.map( (item, i) => (
                        <div 
                            key={item.id + i} 
                            className='container-item-cart'
                        >
                            <div className="subcontainer-cart">
                                <div className="item-cart-left">

                                    <Stock unit={item.unit} size='stock-item-cart'/>

                                    <div className="item-img-pop">
                                        <img 
                                            src={item.id} 
                                            alt={item.name}
                                            className="pop-item-cart" 
                                        />
                                    </div>
                                    
                                </div>
                                <button 
                                    type="button"
                                    className={`trash-item`}
                                    onClick={ () => handleClickTrash(item) }
                                >
                                    <BsFillTrash3Fill 
                                        color="gray" 
                                        className={`icon-trash ${ animation && 'animate__animated animate__tada'}`}
                                    />
                                </button>
                            </div>
                            <hr className='separator-item' />
                        </div>
                    ))
                }
            </div>
  )
}
