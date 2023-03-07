import { AiFillCloseCircle } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { useProductStore } from "../hooks/useProductStore";
import { Stock } from "./Stock";

export const OneItem = ({ counter, setCounter }) => {

    const { 
        product, 
        startAddToCart, 
        startCancelProduct, 
        startTotal 
    } = useProductStore();

    const { id, name, price} = product;

    
    const handleClickCancel = () => {
        setCounter(1);
        startCancelProduct();
    }

    const handleAddCart = () => {
        startAddToCart({
            id,
            name,
            unit: counter,
            price
        });
        const total = price * counter;
        startTotal(total)
        setCounter(1);
        startCancelProduct();
    }

    const handleClick = (unit) => {
        setCounter(unit)
    }

  return (
            <div>
                <button 
                    type='button' 
                    className='close-product'
                    onClick={ handleClickCancel }
                >
                    <AiFillCloseCircle
                        color='#909090'
                        className="close-circle"
                    />
                </button>
                
                <div className="one-product">
                    <img 
                        src={product.id} 
                        alt={product.name}
                        className="pop-one" 
                    />
                </div>
                <div className="bar-name">

                    <div className="item-name">
                        <h4>{product.name}</h4>
                        <p className="point">&bull;</p>
                        <h4 className="price">${product.price}</h4>
                    </div>
                    
                    <div className="btns">
                        <button 
                            type='button' 
                            className='cart add-cart'
                            onClick={handleAddCart}
                        >
                            <MdAddShoppingCart
                                color='white'
                                className='icon-cart'
                            />
                    </button>
                        <button
                            type="button" 
                            className="btn-sub"
                            onClick={ counter > 1 ? () => handleClick(counter - 1) : null }
                        >-</button>
                        <button
                            type="button"
                            className="btn-add"
                            onClick={ () => handleClick(counter + 1) }
                        >+</button>
                    </div>
                </div>
                <div>
                    <hr className="separator" />
                    <p className="description">{product.description}</p>
                    <hr className="separator" />
                </div>
                <Stock position={'250px'} unit={ counter } mobile='stock-detail' />
            </div>
  )
}
