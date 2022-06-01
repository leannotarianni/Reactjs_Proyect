import {useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import getItem from "../../../Fuctions/getItem"



const ItemDetailContainer = () => {
    const[product, setProduct] = useState([])

    useEffect(()=>{
        getItem()
        .then( (response) => {
            setProduct(response)
        })
        .catch((err) => {
            console.log("fallo la llamada.", err)
        })
        .finally( ()=> {
        })

    },[])

    return (
        <>
        <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer