import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ItemCount from '../ItemCount/ItemCount';
/* import onAdd from '../../../fuctions/onAdd'; */
import './card.scss';
import { Link } from 'react-router-dom';




const CardItem = ({data}) => {
    const {title,image,price,id} = data

    const onAdd =(data)=>{
        console.log(data)
    }

    return (
        <Card sx={{maxWidth:300,margin:'auto',padding:'auto' }} >
            <CardContent className="card_item">
                <div className='surfboards_galerry'>
                    <div>
                      <img src={`/${image}`} className='sufrboards_img' alt={`./${title}`}/>
                    </div>
                    <button><Link to={`/Product/${id}`} >Detail View</Link></button>
                    <p>{title}</p>
                    <span>${price} </span>
                    <ItemCount data={data} onAdd={onAdd} />
                </div>
            </CardContent>
        </Card>
    )
}
export default CardItem

