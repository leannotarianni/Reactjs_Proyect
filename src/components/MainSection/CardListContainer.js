import * as React from 'react';
import {useState, useEffect} from 'react';
import CardItemList from './CardItemList';


const CardListContainer =() => {
    
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
            /* console.log(response) */
        })
        .catch((err) => {
        })
        .finally( ()=> {
        })

    },[])
    
    

    return(
        <>
        <CardItemList title={"Prime Selection"} products={products}></CardItemList>
        </> 
    )
}


export default CardListContainer