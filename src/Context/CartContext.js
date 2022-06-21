import { createContext, useState , useEffect } from "react";
import getProducts from "../fuctions/getProducts";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [productsInCart, setproductsInCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const productIsInCart = (data)=> {
        return(
            productsInCart.find(product => product.id === data.id)
        )
    }

    const addProductToCart = ({data,quantity}) =>{
        getProducts()
        const productInCart = {title: data.title,image: data.image,price: data.price,id: data.id,category: data.category,stock:data.stock,quantity}
        
        if(productIsInCart(productInCart)){
            setproductsInCart( productsInCart.map((prod) => {
                if(prod.id === productInCart.id){
                    prod.quantity += productInCart.quantity
                }
                return(
                    prod
                )
            }))
        }else{
            setproductsInCart(producstInCart => [...producstInCart, productInCart])
        }
        setTotalPrice(totalPrice + productInCart.price * productInCart.quantity)
        setTotalQuantity(totalQuantity + productInCart.quantity)
    }
    
    useEffect(()=> {

    },[productsInCart,totalPrice])
    
    const removeProductFromCart = (item)=>{
        setproductsInCart(productsInCart.filter(productsInCart => productsInCart.id !== item.id))
        setTotalPrice(totalPrice - item.price * item.quantity)
        setTotalQuantity(totalQuantity - item.quantity)
    }
    
    const clearCart=()=>{
        setproductsInCart([])
        setTotalPrice([])
        setTotalQuantity([])
    }
    
    
    const data = {
        productsInCart,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        totalPrice,
        totalQuantity,
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider}