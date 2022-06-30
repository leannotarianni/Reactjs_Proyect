import { useContext } from "react"
import CartContext from "../../Context/CartContext"

const CartCount = ({item}) => {
    const {decreaseItemFromCart,increaseItemFromCart} = useContext(CartContext)
    
    return(
        <div>
            <button onClick={() =>decreaseItemFromCart(item)} disabled={item.quantity === 1 }>
                -
            </button>
            <p>{item.quantity}</p>
            <button onClick={() =>increaseItemFromCart(item)}>
                +
            </button>
        </div>
    )
}

export default CartCount