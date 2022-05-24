import * as React from 'react';
import './Card.scss'
import './item-count.scss'
import { useState } from 'react';
import { Button } from '@mui/material';
import './Cardlist'
import './Card'

const ItemCount = ({stock}) => {
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

    const onAdd =()=> {
        console.log(Count)
    }

    return (
        <>
        <div className='item-count'>
            <Button disableRipple onClick={removeCount} disabled={Count === 1 }>-</Button>
            <p>{Count}</p>
            <Button disableRipple onClick={addCount}>+</Button>
        </div>
        <div>
        <Button onClick={onAdd} variant={'outlined'} className='buy_buttom'>Add to cart</Button>
        </div>
       </>
    )
}
export default ItemCount