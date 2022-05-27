import * as React from 'react';
import CardItem from './Card';
import {Grid } from '@mui/material';


const CardList =({products})=> {
    return(
        <>
        <div>
            <h2>titulo</h2>
        </div>
        <Grid container spacing={2} className='galerry_container'>
            {
                products.map( ({products})=>{
                    return(
                        <Grid item xs={12} sm={6} md={3} className="cards_gallery">
                            <CardItem products={products} />
                        </Grid>
                    )
                    
                })
            }
        </Grid> 
        </> 
    )
}

export default CardList