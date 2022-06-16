import { createContext, useState , useEffect } from "react";

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
        console.log("productos en carrito",productsInCart)
        console.log("total carrito",totalPrice)
        /* localStorage.setItem('Productos en Carrito: ',JSON.stringify(productsInCart))
        localStorage.setItem('Total Carrito',JSON.stringify(totalPrice)) */
    },[productsInCart,totalPrice])
    
    const removeProductFromCart = (item)=>{
        setproductsInCart(productsInCart.filter(productsInCart => productsInCart.id !== item.id))
        setTotalPrice(totalPrice - item.price * item.quantity)
        setTotalQuantity(totalQuantity - item.quantity)
        /* localStorage.setItem('Productos en Carrito: ',JSON.stringify(productsInCart))
        localStorage.setItem('Total Carrito',JSON.stringify(totalPrice)) */
    }
    
    const clearCart=()=>{
        setproductsInCart([])
        setTotalPrice([])
        /* localStorage.clear() */
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