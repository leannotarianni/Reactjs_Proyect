import * as React from 'react';
import './Card.scss'
import './ItemCount'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ItemCount from './ItemCount';

const CardItem = ({image, title,price,stock}) => {
    
    const onAdd =(count)=>{
        console.log(count)
    }

    return (
        <Card sx={{maxWidth:300,margin:'auto',padding:'auto' }} >
            <CardContent className="card_item">
                <div className='surfboards_galerry'>
                    <div>
                      <img src={`./${image}`} className='sufrboards_img' alt='al merrick boddy quad'/>
                    </div>
                    <p>{title}</p>
                    <span>${price} </span>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            </CardContent>
        </Card>
    )
}
export default CardItem