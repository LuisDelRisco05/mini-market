import { createSlice } from '@reduxjs/toolkit';
import { data } from "../../helpers/data";


export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: data,
        product: {},
        cart:[],
        total: 0,
        shoppingCart: false
    },
    reducers: {
        onAddProduct: (state, { payload } ) => {
          state.product = payload
        },      
        onCancelProduct: ( state ) => {
            state.product = {}
        },
        onAddToCart: ( state, { payload }) => {
            state.cart = [...state.cart, payload]
        },
        onTotal: ( state, { payload }) => {
            state.total = state.total + payload
        },
        onActiveShoppingCart: ( state ) => {
            state.shoppingCart = true
        },
        onDesactiveShoppingCart: ( state ) => {
            state.shoppingCart = false
        },

    }
});


export const { 
    onAddProduct,  
    onCancelProduct, 
    onAddToCart, 
    onTotal,
    onActiveShoppingCart,
    onDesactiveShoppingCart 
} = productSlice.actions;