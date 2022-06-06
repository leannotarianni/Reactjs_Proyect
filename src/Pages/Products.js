import { Container} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import getItems from '../fuctions/getItems';
import { useEffect } from 'react';
import CardItemList from '../components/MainSection/CardItemList/CardItemList';

const Products =()=> {
    const [products, setProducts] = useState([])
    const {category} = useParams()

    const filterByCategory =(array)=> {
        return array.map( (item) => {
         if(item.category == category)  {
            return setProducts(products => [...products, item])
         }
        })
        
    }

    useEffect(()=>{
        setProducts([])
        getItems()
        .then( (response) => {
            filterByCategory(response)
        })
        .catch((err) => {
            console.log("fallo la llamada.", err)
        })
        .finally( ()=> {
        })

    },[category])

    return(
        <div>
            <Container maxWidth="xxl">
                <CardItemList products={products}/>
            </Container> 
        </div>
        
    )
}

export default Products