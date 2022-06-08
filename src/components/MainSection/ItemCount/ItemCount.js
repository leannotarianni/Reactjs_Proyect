import * as React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import './item-count.scss'


const ItemCount = ({setShowButton,data, onAdd}) => {


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
        <Button onClick={()=> setShowButton(true)}  on variant={'outlined'} className='buy_buttom'>Add to cart</Button>
        </div>
       </>
    )
}
export default ItemCount