import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';
//Dependencies
import DeleteIcon from '@mui/icons-material/Delete';

const Cart =()=> {
    const {productsInCart, clearCart,removeProductFromCart} = useContext(CartContext)
    const productsInCart2 = JSON.parse(localStorage.getItem('Productos en Carrito: '))
    console.log("carrito storage",productsInCart2)
    
    return(
        <>
        <div className='container-item-list-cart'>
            {productsInCart.length === 0 && (
                <>
                    <p>No hay productos agregados al carrito</p>
                    <Link to='/' >Empezar a comprar</Link>
                </>
            )}
            {productsInCart.map( (item) => {
                return(
                <div className='item-cart' key={item.id}>
                    <div className='item-cart-mage'>
                        <img src={`/${item.image}`} alt="prod carrito" />
                    </div>
                    <div className='item-cart-title'>
                        <p>{item.title}</p>
                    </div>
                    <div className='item-cart-price'>
                        <span>$ {item.price}</span>
                    </div>
                    <div className='item-cart-quantity'>
                        <p>selected: {item.quantity}</p>
                    </div>
                    <div className='item-cart-delete'>
                        <button onClick={() =>removeProductFromCart(item.id)}>
                            <DeleteIcon  />
                        </button>
                    </div>
                </div>
                )
            })
            } 
        </div>
        <div key={1}>
            <button onClick={clearCart}>
                clear
            </button>
        </div>
        </>
    )
}

export default Cart