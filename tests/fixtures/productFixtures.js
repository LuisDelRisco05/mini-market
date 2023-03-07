import { data } from "../../src/helpers/data";

export const initialState = {
    products: data,
    product: {},
    cart:[],
    total: 0,
    shoppingCart: false
}

export const product = { 
    id:"/src/assets/img3.png",
    name:"Squirtle",
    price:4.5,
    unit:1,
    description:"Figura coleccionable estilizada de 3 ¾ pulgadas de alto, perfecta para cualquier fan de Pokemon",
};


export const productTocart = {
    id:"/src/assets/img3.png",
    name:"Squirtle",
    unit:1,
    price:4         
}


export const addCartStateInit = {
    products: data,
    product: 
        {     
            id:"/src/assets/img3.png",
            name:"Squirtle",
            price:4,
            unit:1,
            description:"Figura coleccionable estilizada de 3 ¾ pulgadas de alto, perfecta para cualquier fan de Pokemon"
        },
    cart:[],
    total: 0,
    shoppingCart: false
  
}
export const addCartState = {
    products: data,
    product: 
        {     
            id:"/src/assets/img3.png",
            name:"Squirtle",
            price:4,
            unit:1,
            description:"Figura coleccionable estilizada de 3 ¾ pulgadas de alto, perfecta para cualquier fan de Pokemon"
        },
    cart:[
        {
            id:"/src/assets/img3.png",
            name:"Squirtle",
            unit:1,
            price:4         
        }
    ],
    total: 0,
    shoppingCart: false
  
}
export const deleteCartState = {
    products: data,
    product: {},
    cart:[
        {
            id:"/src/assets/img3.png",
            name:"Squirtle",
            unit:1,
            price:4         
        }
    ],
    total: 4,
    shoppingCart: false
  
}
