import * as React from 'react';
import { useState, useContext } from 'react';
import CartContext from '../../../Context/CartContext';
//Dependencies
import { Button } from '@mui/material';
//Style
import './item-count.scss'



const ItemCount = ({setShowButton,data/* ,onAdd */}) => {
    
    const { addProductToCart } = useContext(CartContext);
    const [quantitySelected,setQuantitySelected] = useState (data.quantity)

    //general
    const onAdd =()=>{
        /* console.log("cantidad elegida",quantity) */
        addProductToCart(data)
    }

    const [quantity,setQuantity] = useState (1)

    const addCount =()=> {
        if(quantity < data.stock) {
          setQuantity(quantity + 1)
        }
    }

    const removeCount =()=> {
        setQuantity(quantity - 1)
    }

    return (
        <>
        <div className='item-count'>
            <Button disableRipple onClick={removeCount} disabled={quantity === 1 }>-</Button>
            <p>{quantity}</p>
            <Button disableRipple onClick={addCount}>+</Button>
        </div>
        <div>
        <Button onClick={()=> onAdd(quantity)} variant={'outlined'} className='buy_buttom'>Add to cart</Button>
        </div>
       </>
    )
}
export default ItemCount