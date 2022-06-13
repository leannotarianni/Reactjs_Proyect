import { createContext, useState , useEffect } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartItemList, setCartItemList] = useState([])
    /* const [quantitySelected, setQuantitySelected] = useState([]) */
    const [productsInCart, setproductsInCart] = useState([])

    
    
    const isInCart =(data)=>{
        return(
            cartItemList.find(cartItem => cartItem.id === data.id)
        )
    } 
    
    const productIsInCart = (data)=> {
        return(
            productsInCart.find(product => product.id === data.id)
        )
    }


    const addProductToCart = ({data,quantity}) =>{
        
        const productInCart = {title: data.title,image: data.image,price: data.price,id: data.id,category: data.category,stock:data.stock,quantity}
        
        if(!isInCart(data)) {
            setCartItemList(cartItemList => [...cartItemList, data])
            /* setQuantitySelected(quantity) */
        } 
        else if(productIsInCart(data)){

            setproductsInCart(producstInCart => [...producstInCart, productInCart])
        }
        setproductsInCart(producstInCart => [...producstInCart, productInCart])
    }
    
    useEffect(()=> {
        /* console.log("producto agregado",cartItemList) */
        console.log("productos en carrito",productsInCart)
    },[cartItemList,productsInCart])
    
/*     const removeProductFromCart = (item)=>{
         
        setproductsInCart()
    } */
    
    const clearCart=()=>{
        setproductsInCart([])
        setCartItemList([])
    }

    const data = {
        cartItemList,
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