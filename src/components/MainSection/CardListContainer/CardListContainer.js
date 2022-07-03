import * as React from 'react';
import {useState, useEffect} from 'react';

//Components
import CardItemList from '../CardItemList/CardItemList';

//Fuctions
import getProducts from '../../../fuctions/getProducts';
import Loading from '../../../fuctions/loading';

const CardListContainer =({category,title}) => {
    /* const {category} = useParams() */
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(true)

    // se muestre una sola vez
    useEffect(()=>{
        //llamado promesa
        getProducts()
        .then( (response) => {
            setLoading(false)
            /* setProducts(response) */
            switch(category){
                case'surfboards':setProducts( category ? response.filter( product => product.category === category) : response );
                break;
                case'sup':setProducts( category ? response.filter( product => product.category === category) : response );
                break;
                case'bodyboards':setProducts( category ? response.filter( product => product.category === category) : response );
                break;
                case'accesories':setProducts( category ? response.filter( product => product.category === category) : response );
                break;
                default:if(title === "Prime selection"){
                    setProducts(products ? products.filter( product => product.price > 250000) : products)
                }else if(title === "Get started"){
                   setProducts(products ? products.filter( product => product.price < 70000 && product.category === 'bodyboards') : products) 
                }else if(title === "Modify your table"){
                    setProducts(products ? products.filter( product => product.category === 'accesories' && product.price < 15000 ) : products)
                };
            }
        })
        .catch((err) => {
            console.log("fallo la llamada.", err)
        })
        .finally( ()=> {
        })

    },[category,products,title])
    
    

    return(
        <>
        {
            (loading)
        
            ?

            ( <Loading/> ) 
        
            :
            
            <div>
                <h2>{title}</h2>
                <CardItemList products={products}></CardItemList>
            </div>
        }
        </> 
    )
}


export default CardListContainer