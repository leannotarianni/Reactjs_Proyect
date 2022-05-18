import * as React from 'react';
import './Card.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';


const CardItem = ({image, title,price}) => {
    return (
        <Card sx={{maxWidth:300,margin:'auto',padding:'auto' }} >
            <CardContent className="card_item">
                <div className='surfboards_galerry'>
                    <div>
                      <img src={`./${image}`} className='sufrboards_img' alt='al merrick boddy quad'/>
                    </div>
                    <p>{title}</p>
                    <span>${price} </span>
                    <Button variant={'outlined'} className='buy_buttom'>Buy</Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default CardItem