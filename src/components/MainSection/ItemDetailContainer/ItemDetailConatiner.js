import {useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
/* import getItems from "../../../Fuctions/getItems" */
import { useParams } from "react-router-dom"
import productsMock from "../../../Data/productsMocks"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const[product, setProduct] = useState({})
    
    const productsFilter = productsMock.find((product)=>{
        return product.id == id
    })

    useEffect(()=>{
         /* getItems()
        .then( (response) => {
            setProduct(response)
        })
        .catch((err) => {
            console.log("fallo la llamada.", err)
        })
        .finally( ()=> {
        })  */
        setProduct(productsFilter)

    },[])

    return (
        <>
        <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer