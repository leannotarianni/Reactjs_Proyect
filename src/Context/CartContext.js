import { createContext, useState , useEffect } from "react";

const CartContext = createContext()
/* const productsInCart = [{}]
 */

const CartProvider = ({children}) => {
    const [cartItemList, setCartItemList] = useState([])
    /* const [quantitySelected, setQuantitySelected] = useState([]) */
    const [productsInCart, setproductsInCart] = useState([])

    const isInCart =(data)=>{
        cartItemList.find(cartItem => cartItem.id === data.id)
    } 
    
    
    const addProductToCart = ({data,quantity}) =>{
        
        const productInCart = {title: data.title,price: data.price,id: data.id,category: data.category,stock:data.stock,quantity}

        if(!isInCart({data,productInCart})) {
            setCartItemList(cartItemList => [...cartItemList, data])
            setproductsInCart(producstInCart => [...producstInCart, productInCart])
            /* setQuantitySelected(quantity) */
        } 

    }
    
    useEffect(()=> {
        /* console.log("producto agregado",cartItemList) */
        console.log("productos en carrito",productsInCart)
    },[cartItemList,productsInCart])
    
    /* const removeProductFromCart = (producstInCart)=>{
        
    } */
    useEffect(()=>{
        return(
            console.log(productsInCart)

        )
    })
    /* const clearCart=()=>{
        setproductsInCart({})
    } */

    const data = {
        cartItemList,
        addProductToCart,
        /* clearCart */
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider}