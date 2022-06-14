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
    },[productsInCart])
    
/*     const removeProductFromCart = (item)=>{
         
        setproductsInCart()
    } */
    
    const clearCart=()=>{
        setproductsInCart([])
    }

    const data = {
        productsInCart,
        addProductToCart,
        clearCart
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider}