import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import getItems from "../../../fuctions/getItems"
import Loading from "../../../fuctions/loading"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const[product, setProduct] = useState({})
    const [loading, setLoading]= useState(true)


    useEffect(()=>{
         getItems()
        .then( (response) => {
            setLoading(false)
            setProduct(response.find ((product)=>{
                return product.id === parseInt(id)
            }))
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