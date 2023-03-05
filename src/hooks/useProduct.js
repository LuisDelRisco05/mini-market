import { useDispatch, useSelector } from "react-redux";
import { onAddProduct, onCancelProduct, onAddToCart, onTotal } from "../store/product-slice";


export const useProduct = () => {

    const dispatch = useDispatch();
    const { products, product, cart, total } = useSelector( state => state.product);

    const startAddProduct = (item) => {
      dispatch(onAddProduct(item))
    }


    const startCancelProduct = () => {
      dispatch(onCancelProduct())
    }

    const startAddToCart = (product) => {
      dispatch( onAddToCart(product))
    }

    const startTotal = (amount) => {
      dispatch( onTotal(amount))
    }



  return {
    // state
    products,
    product,
    cart,
    total,

    // functions
    startAddProduct,
    startCancelProduct,
    startAddToCart,
    startTotal
  }
}
