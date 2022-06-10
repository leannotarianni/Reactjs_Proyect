import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartItemList, setCartItemList] = useState([])
    
    const addProductToCart = (product) =>{
        console.log("producto agregado",product)
        let isInCart = cartItemList.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            setCartItemList(cartItemList => [...cartItemList, product])
        }
    }

    const removeProductFromCart = (product)=>{
        
    }

    const data = {
        cartItemList,
        addProductToCart
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider}