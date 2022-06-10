import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import CartContext from '../../Context/CartContext';
//Dependencies
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
//Style
import './cart-widget.scss'
/* import MenuItem from '@mui/material/MenuItem';*/
/* import { Link } from 'react-router-dom';*/

const CartWidget =()=>{
    const {cartItemList} = useContext(CartContext)
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
                    {cartItemList.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                            <Link to="'/'" >Empezar a comprar</Link>
                        </>
                    )}
                    {cartItemList.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod__image'>
                                <img src={`/${item.image}`} alt="prod carrito" />
                            </div>
                            <div className='cart-prod__info'>
                                <p>{item.title}</p>
                                <span>$ {item.price}</span>
                            </div>
                            <div className='cart-prod__action'>
                                <button>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                        )
                    })} 
                        {/* <div className='item-cart-prod' key={1}>
                            <div className='cart-prod__image'>
                                <img src='/al merrick boddy quad.jpg' alt="prod carrito" />
                            </div>
                            <div className='cart-prod__info'>
                                <p>tabla surf</p>
                                <span>$ 120000</span>
                            </div>
                            <div className='cart-prod__action'>
                                <button>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div> */}
                    
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget