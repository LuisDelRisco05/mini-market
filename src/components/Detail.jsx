import { useProduct } from "../hooks/useProduct";
import { Stock } from "./Stock";
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";



export const Detail = ({ counter, setCounter }) => {


    const { product, startAddToCart, startCancelProduct, startTotal } = useProduct();

    const { id, name, unit, price} = product;

    const handleClick = (unit) => {
        setCounter(unit)
    }

    const handleAddCart = () => {
        startAddToCart({
            id,
            name,
            unit: counter
        });
        const total = price * counter;
        startTotal(total)
        setCounter(0);
        startCancelProduct();
    }

    const handleClickCancel = () => {
        setCounter(0);
        startCancelProduct();
    }

  return (
    <div className="container-detail">
        { Object.keys(product).length === 0 && <p className="text-right">Please choose a product on the left.</p>}
        { Object.keys(product).length > 1
            &&
                (   
                    <div>
                        <button 
                            type='button' 
                            className='close-product'
                            onClick={ handleClickCancel }
                        >
                            <AiFillCloseCircle
                                size={30} 
                                color='#909090'
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
                            
                            <button 
                                type='button' 
                                className='cart add-cart'
                                onClick={handleAddCart}
                            >
                                <MdAddShoppingCart
                                    size={16} 
                                    color='white'
                                    className='icon-cart'
                                />
                            </button>
                            <div className="btns">
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
                        <Stock position={'16rem'} unit={ counter } />
                    </div>
                )
        }
    </div>
  )
}
