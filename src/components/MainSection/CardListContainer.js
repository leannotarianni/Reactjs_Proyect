import * as React from 'react';
import {useState, useEffect} from 'react';
import CardItemList from './CardItemList';
import getItems from '../Fuctions/getItem'

const CardListContainer =() => {
    
    const [products, setProducts] = useState([])
    

    getItems()

    // se muestre una sola vez
    useEffect(()=>{
        //llamado promesa
        getItems()
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
        <CardItemList title={"Prime Selection"} products={products}></CardItemList>
        </> 
    )
}


export default CardListContainer