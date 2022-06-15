import { createContext, useState , useEffect } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [productsInCart, setproductsInCart] = useState([])
    
    const productIsInCart = (data)=> {
        return(
            productsInCart.find(product => product.id === data.id)
        )
    }
    

    const addProductToCart = ({data,quantity}) =>{
        
        const productInCart = {title: data.title,image: data.image,price: data.price,id: data.id,category: data.category,stock:data.stock,quantity}
        localStorage.setItem('Productos en Carrito: ',JSON.stringify(productInCart))
        
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
    }
    
    useEffect(()=> {
        console.log("productos en carrito",productsInCart)
        localStorage.setItem('Productos en Carrito: ',JSON.stringify(productsInCart))
    },[productsInCart])
    
    const removeProductFromCart = (id)=>{
        setproductsInCart(productsInCart.filter(productsInCart => productsInCart.id !== id))
        localStorage.setItem('Productos en Carrito: ',JSON.stringify(productsInCart))
    }
    
    const clearCart=()=>{
        setproductsInCart([])
        localStorage.clear()
    }
    
    
    const data = {
        productsInCart,
        addProductToCart,
        removeProductFromCart,
        clearCart,
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider}