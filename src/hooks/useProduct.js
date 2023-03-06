import { useDispatch, useSelector } from "react-redux";
import { 
  onAddProduct, 
  onCancelProduct, 
  onAddToCart, 
  onTotal, 
  onActiveShoppingCart,
  onDesactiveShoppingCart 
} from "../store/product-slice";


export const useProduct = () => {

    const dispatch = useDispatch();
    const { products, product, cart, total, shoppingCart } = useSelector( state => state.product);

    const startAddProduct = (item) => {
      dispatch( onAddProduct(item) )
    }


    const startCancelProduct = () => {
      dispatch( onCancelProduct() )
    }

    const startAddToCart = (product) => {
      dispatch( onAddToCart(product) )
    }

    const startTotal = (amount) => {
      dispatch( onTotal(amount) )
    }

    const startActiveShoppingCart = () => {
      dispatch( onActiveShoppingCart() )
    }
    const startDesactiveShoppingCart = () => {
      dispatch( onDesactiveShoppingCart() )
    }



  return {
    // state
    products,
    product,
    cart,
    total,
    shoppingCart,

    // functions
    startAddProduct,
    startCancelProduct,
    startAddToCart,
    startTotal,
    startActiveShoppingCart,
    startDesactiveShoppingCart
  }
}
