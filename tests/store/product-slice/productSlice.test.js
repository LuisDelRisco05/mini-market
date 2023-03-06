import { productSlice } from "../../../src/store/product-slice/productSlice"



describe('Test productSlice', () => {


    test('debe de regresar el estado inicial y llamarse "product"', () => {


        expect(productSlice.name).toBe('product');

    })


})