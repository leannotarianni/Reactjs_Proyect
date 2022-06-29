import { Container} from '@mui/material';
import { useState,useEffect } from 'react';
//Components
import Loading from '../fuctions/loading';
import CardItemList from '../components/MainSection/CardItemList/CardItemList';
import getProducts from '../fuctions/getProducts';

const Home =()=> {
    const [loading, setLoading]= useState(true)
    const [products, setProducts] = useState([]) 

    useEffect(()=>{
        
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
            <div>
                <Container maxWidth="xxl">
                    <CardItemList products={products ? products.filter( product => product.price > 250000) : products} title={"Prime selection"}/>
                </Container>
                <Container maxWidth="xxl">
                    <CardItemList products={products ? products.filter( product => product.price < 70000 && product.category === 'bodyboards') : products} title={"Get started"}/>
                </Container>
                <Container maxWidth="xxl">
                    <CardItemList products={products ? products.filter( product => product.category === 'accesories' && product.price < 15000 ) : products} title={"Modify your table"}/>
                </Container> 
            </div>
        }
        </>
    )
}

export default Home