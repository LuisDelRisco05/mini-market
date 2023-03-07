import { useDispatch, useSelector } from "react-redux";
import { 
  onAddProduct, 
  onCancelProduct, 
  onAddToCart, 
  onDeleteItem,
  onTotal, 
  onActiveShoppingCart,
  onDesactiveShoppingCart,
  onUpdateStorage 
} from "../store/product-slice";


export const useProductStore = () => {

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

    const startDeleteItem = (newCart, newTotal) => {
      dispatch( onDeleteItem({newCart, newTotal}))
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

    const startUpdateStorage = (cartStorage, totalStorage) => {
      // console.log(cartStorage, totalStorage);
      dispatch( onUpdateStorage({ cartStorage, totalStorage }))
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
    startDeleteItem,
    startTotal,
    startActiveShoppingCart,
    startDesactiveShoppingCart,
    startUpdateStorage
  }
}
