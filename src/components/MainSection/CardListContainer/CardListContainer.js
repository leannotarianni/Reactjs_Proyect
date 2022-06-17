import * as React from 'react';
import {useState, useEffect} from 'react';

//Components
import CardItemList from '../CardItemList/CardItemList';

//Fuctions
import getProducts from '../../../fuctions/getProducts';
import Loading from '../../../fuctions/loading';

const CardListContainer =() => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(true)

    // se muestre una sola vez
    useEffect(()=>{
        //llamado promesa
        getProducts()
        .then( (response) => {
            setLoading(false)
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
        {
            (loading)
        
            ?

            ( <Loading/> ) 
        
            :
            <CardItemList title={"Prime Selection"} products={products}></CardItemList>
        }
        </> 
    )
}


export default CardListContainer