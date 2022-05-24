import * as React from 'react';
import CardItem from './Card';
import {Grid } from '@mui/material';

const CardList =({title,stock})=> {
    /* const products = [
        {
            title:'al merrick boddy quad',
            price: 10600,
            image: 'al merrick boddy quad.jpg',
        },
        {
            title:'chris christenson water lion',
            price: 120000,
            image: 'chris christenson water lion.jpg',
        },
        {
            title:'lost rnf 1996 light speed',
            price: 155600,
            image: 'lost rnf 1996 light speed.jpg',
        },
        {
            title:'torq multiplier tec',
            price: 97000,
            image: 'torq multiplier tec.jpg',
        }
    ] */
    return(
        <>
        <div>
            <h1>{title}</h1>
        </div>
        <Grid container className='galerry_container'>
            <Grid item xs={12} sm={6} md={3} className="cards_gallery">
                <CardItem title={"al merrick boddy quad"} price={106000} image={"al merrick boddy quad.jpg"} stock={5} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="cards_gallery">
                <CardItem title={"chris christenson water lion"} price={120000} image={"chris christenson water lion.jpg"} stock={8} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="cards_gallery">
                <CardItem title={"lost rnf 1996 light speed"} price={155600} image={"lost rnf 1996 light speed.jpg"} stock={3} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="cards_gallery">
                <CardItem title={"torq multiplier tec"} price={97000} image={"torq multiplier tec.jpg"} stock={12} />
            </Grid>
        </Grid> 
        </> 
    )
}

export default CardList