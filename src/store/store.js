import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./product-slice/productSlice";




export const store = configureStore({
    reducer: {
        product: productSlice.reducer
    }
})