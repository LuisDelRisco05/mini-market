import { 
    productSlice, 
    onAddProduct, 
    onCancelProduct, 
    onAddToCart, 
    onDeleteItem,
    onTotal,
    onActiveShoppingCart
} from "../../../src/store/product-slice/productSlice"

import { addCartState, addCartStateInit, deleteCartState, initialState, product, productTocart } from "../../fixtures/productFixtures";
  

describe('Test productSlice', () => {


    test('should return to the initial state and be called "product".', () => {
 
        const state = productSlice.reducer( initialState, {} );
        
        expect( state ).toEqual( initialState );
        expect(productSlice.name).toBe('product');

    });

    test("should handle onAddProduct", () => {


        const state = productSlice.reducer(initialState, onAddProduct(product));

        expect(state.product).toEqual(product);
    });

    test("should cancel onCancelProduct", () => {

        const state = productSlice.reducer(initialState, onCancelProduct({}));

        expect(state.product).toEqual({});
    });

    test("should add onAddToCart", () => {

        const state = productSlice.reducer(addCartStateInit, onAddToCart(productTocart));

        expect(state).toEqual(addCartState);
    });

    test("should delete onDeleteItem", () => {

        const deleteItem = {
            newCart:[], total: 1
        }

        const state = productSlice.reducer(deleteCartState, onDeleteItem(deleteItem));

        expect(state.cart).toStrictEqual([]);
    });

    test("should reset onTotal", () => {

        const newTotal = 0;

        const state = productSlice.reducer(initialState, onTotal(newTotal));

        expect(state.total).toBe(newTotal);
    });


    test("should active onActiveShoppingCart", () => {

        const shoppingCart = true;

        const state = productSlice.reducer(initialState, onActiveShoppingCart(shoppingCart));

        expect(state.shoppingCart).toBe(shoppingCart);
    });






 

});