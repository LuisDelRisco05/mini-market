import { useProduct } from "../hooks/useProduct";
import { Stock } from "./Stock";
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";



export const Detail = ({ counter, setCounter }) => {


    const { 
        product, 
        cart, 
        shoppingCart, 
        total, 
        startAddToCart, 
        startDeleteItem,
        startCancelProduct, 
        startTotal 
    } = useProduct();

    const { id, name, price} = product;

    const handleClick = (unit) => {
        setCounter(unit)
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

    const handleClickCancel = () => {
        setCounter(1);
        startCancelProduct();
    }

    const handleClickTrash = (product) => {
        const newCart = cart.filter( item => item.id !== product.id );
        startDeleteItem(newCart, product.unit * product.price)
    }

  return (
    <div className="container-detail">
        { Object.keys(product).length === 0 && !shoppingCart &&  <p className="text-right"></p>}
        { Object.keys(product).length > 0 && !shoppingCart
            &&
                (   
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
        {
            (shoppingCart && cart.length > 0)
                &&  (
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
                                                className="trash-item"
                                                onClick={ () => handleClickTrash(item) }
                                            >
                                                <BsFillTrash3Fill 
                                                    className="icon-trash"
                                                    color="gray" 
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
        {/* <form style={{ backgroundColor: 'red', width: '10rem', height: '1rem'}}>
            <script
                src="https://checkout.wompi.co/widget.js"
                data-render="button"
                data-public-key="pub_test_hrKeZIq39IkiyTviEjBMHcYL4cLNuUxR"
                data-currency="COP"
                data-amount-in-cents="4950000"
                data-reference="4XMPGKWWPKWQ"
                data-signature:integrity="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
                >
            </script>
        </form> */}
    </div>
  )
}
