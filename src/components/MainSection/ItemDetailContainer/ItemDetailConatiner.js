import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
/* import {doc, getdoc} from 'firebase/firestore'
import db from "../../../data/firebaseconfig"*/
// Components
import ItemDetail from "../ItemDetail/ItemDetail"
//Functions
import getProduct from "../../../fuctions/getProduct"
import Loading from "../../../fuctions/loading"


const ItemDetailContainer = () => {
    const { id } = useParams()
    const[product, setProduct] = useState({})
    const [loading, setLoading]= useState(true)


    useEffect(()=>{
        getProduct(id)
        .then( (response) => {
            setProduct(response)
            setLoading(false)
            /*setProduct(response.find ((product)=>{
                return product.id === parseInt(id)
            })) */
        })
        .catch((err) => {
            console.log("fallo la llamada.", err)
        })
        .finally( ()=> {
        }) 
        
    },[id])


    
    return (
        <>
        {
            (loading)
        
            ?

            ( <Loading/> ) 
        
            :
            
            <ItemDetail data={product}/>
        }
        </>
    )
}

export default ItemDetailContainer