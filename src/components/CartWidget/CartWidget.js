import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import CartContext from '../../Context/CartContext';
//Dependencies
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
//Components
import CartCount from './CartCount';
//Style
import './cart-widget.scss'


const CartWidget =()=>{
    const {productsInCart, clearCart,removeProductFromCart,totalQuantity} = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    
    return(
        
        <div className='cart-container-icon'>
            {totalQuantity() !== 0 &&(
            <p>{totalQuantity()}</p>
            )}
            <ShoppingCartIcon 
                color={'primary'} 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                marginThreshold={50}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
            <div className='container-item-list-cart'>
                {productsInCart.length === 0 && (
                    <>
                        <p>No hay productos agregados al carrito</p>
                        <Link to='/' >Empezar a comprar</Link>
                    </>
                )}
                {productsInCart.map( (item) => {
                     return(
                    <div className='item-cart-prod' key={item.id}>
                        <div className='cart-prod__image'>
                            <img src={`/${item.image}`} alt="prod carrito" />
                        </div>
                        <div className='cart-prod__info'>
                            <p>{item.title}</p>
                            <span>$ {item.price * item.quantity}</span>
                            <p>selected: {item.quantity}</p>
                        </div>
                        <CartCount item={item}/>
                        <div className='cart-prod__delet'>
                            <button onClick={() =>removeProductFromCart(item)}>
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
                <button>
                    <Link to='/Cart'>View Cart</Link>
                </button>
            </div>
            </Menu>
        </div>
    )
}

export default CartWidget