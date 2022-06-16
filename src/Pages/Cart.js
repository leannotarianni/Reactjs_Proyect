import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';
//Dependencies
import { Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
//Styles
import './cart.scss'

const Cart =()=> {
    const {productsInCart,clearCart,removeProductFromCart,totalPrice} = useContext(CartContext)
    /* const productsInCart2 = JSON.parse(localStorage.getItem('Productos en Carrito: '))
    const totalPrice2 = JSON.parse(localStorage.getItem('Total Carrito')) */
    
    /* console.log("carrito storage",productsInCart2)
    console.log("total carrito storage",totalPrice2) */
    return(
        <Container className='general-container'>
        <div className='container-item-list-cart'>
            {productsInCart.length === 0 && (
                <>
                    <p>No hay productos agregados al carrito</p>
                    <Link to='/' >Empezar a comprar</Link>
                </>
            )}
            {productsInCart.length !== 0 && (
            <div className='item-cart-head'>
                <h2>Product</h2>
                <h2>Description</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Delet</h2>
            </div>
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
                        <button onClick={() =>removeProductFromCart(item)}>
                            <DeleteIcon  />
                        </button>
                    </div>
                </div>
                )
            })
            }
            {productsInCart.length !== 0 && ( 
            <div className='item-cart-footer'>
                <button onClick={clearCart}>
                    clear Cart
                </button>
                <div>
                    <p>total: </p>
                    <p>${totalPrice}</p>
                </div>
                <button>
                    Complete Check Out
                </button>
            </div>)
            }
        </div>
        </Container>
    )
}

export default Cart