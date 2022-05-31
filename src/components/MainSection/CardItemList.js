import * as React from 'react';
import CardItem from './Card';
import {Grid} from '@mui/material';


const CardItemList =({title,products})=> {
    return(
        <>
        <div>
            <h2>{title}</h2>
        </div>
        <Grid container spacing={2} className='galerry_container'>
            {
                products.map( (product)=>{
                    return(
                        <Grid product xs={12} sm={6} md={3} className="cards_gallery" key={product.id}>
                            <CardItem product={product} />
                        </Grid>
                    )
                    
                })
            }
        </Grid> 
        </> 
    )
}

export default CardItemList