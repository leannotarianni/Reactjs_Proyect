import * as React from 'react';
import './Card.scss'
import './item-count.scss'
import { useState } from 'react';
import { Button } from '@mui/material';
import './CardListContainer'
import './Card'

const ItemCount = ({stock, onAdd}) => {
    const [Count,setCount] = useState (1)
    /* const [Stock, setStock] = useState (5)  */

    const addCount =()=> {
        if(Count < stock) {
          setCount(Count + 1)   
        }
        
    }

    const removeCount =()=> {
        setCount(Count - 1)
    }

    return (
        <>
        <div className='item-count'>
            <Button disableRipple onClick={removeCount} disabled={Count === 1 }>-</Button>
            <p>{Count}</p>
            <Button disableRipple onClick={addCount}>+</Button>
        </div>
        <div>
        <Button onClick={()=> onAdd(Count)} variant={'outlined'} className='buy_buttom'>Add to cart</Button>
        </div>
       </>
    )
}
export default ItemCount