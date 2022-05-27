import * as React from 'react';
import {useState, useEffect} from 'react';
import CardList from './Cardlist';


const CardListContainer =({title,stock}) => {
    
    const [products, setProducts] = useState([])
    const productsMock = [
       {
        title: 'al merrick boddy quad',
        price: 10600,
        image: 'al merrick boddy quad.jpg',
        id: 1001,
        stock: 5,
        },
        {
        title: 'chris christenson water lion',
        price: 120000,
        image: 'chris christenson water lion.jpg',
        id: 1002,
        stock: 8,
        },
        {
        title: 'lost rnf 1996 light speed',
        price: 155600,
        image: 'lost rnf 1996 light speed.jpg',
        id: 1003,
        stock: 3,
        },
        {
        title: 'torq multiplier tec',
        price: 97000,
        image: 'torq multiplier tec.jpg',
        id: 1004,
        stock: 12,
        },
    ]

    
    //promesa
    const getProducts = () => {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
                resolve(productsMock)
           }, 2000)
       })
        
    }

    // se muestre una sola vez
    useEffect(()=>{
        //llamado promesa
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
        .catch((err) => {
        })
        .finally( ()=> {
        })

    },[])
    
    

    return(
        <>
        <div>
            <h1>{title}</h1>
        </div>
        {console.log(products)}
{/*         <Grid container spacing={2} className='galerry_container'>
            <Grid item xs={12} sm={6} md={3} className="cards_gallery">
                <CardItem title={"al merrick boddy quad"} price={106000} image={"al merrick boddy quad.jpg"} stock={5} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="cards_gallery">
                <CardItem title={"christenson water lion"} price={120000} image={"chris christenson water lion.jpg"} stock={8} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="cards_gallery">
                <CardItem title={"lost rnf 1996 light speed"} price={155600} image={"lost rnf 1996 light speed.jpg"} stock={3} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="cards_gallery">
                <CardItem title={"torq multiplier tec"} price={97000} image={"torq multiplier tec.jpg"} stock={12} />
            </Grid>
        </Grid>  */}
{/*         <CardList products={products}></CardList> */}
        </> 
    )
}


export default CardListContainer