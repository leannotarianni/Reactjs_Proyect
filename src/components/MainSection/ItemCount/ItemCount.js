import * as React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import './item-count.scss'


const ItemCount = ({stock, onAdd}) => {
    const [count,setCount] = useState (1)
    /* const [Stock, setStock] = useState (5)  */

    const addCount =()=> {
        if(count < stock) {
          setCount(count + 1)   
        }
        
    }

    const removeCount =()=> {
        setCount(count - 1)
    }

    return (
        <>
        <div className='item-count'>
            <Button disableRipple onClick={removeCount} disabled={count === 1 }>-</Button>
            <p>{count}</p>
            <Button disableRipple onClick={addCount}>+</Button>
        </div>
        <div>
        <Button onClick={()=> onAdd(count)} variant={'outlined'} className='buy_buttom'>Add to cart</Button>
        </div>
       </>
    )
}
export default ItemCount