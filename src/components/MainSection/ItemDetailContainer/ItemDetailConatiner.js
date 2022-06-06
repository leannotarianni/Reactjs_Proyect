import {useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import getItems from "../../../fuctions/getItems"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const[product, setProduct] = useState({})
    

    useEffect(()=>{
         getItems()
        .then( (response) => {
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
        <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer