import * as React from 'react';
import {useState, useEffect} from 'react';
import CardItemList from '../CardItemList/CardItemList';
import getItems from '../../../Fuctions/getItems'

const CardListContainer =() => {
    
    const [products, setProducts] = useState([])
    
    // se muestre una sola vez
    useEffect(()=>{
        //llamado promesa
        getItems()
        .then( (response) => {
            setProducts(response)
        })
        .catch((err) => {
            console.log("fallo la llamada.", err)
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