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
            setProducts( response ? response.filter( product => product.price > 150000) : response )
        })
        .catch((err) => {
            console.log("fallo la llamada.", err)
        })
        .finally( ()=> {
        })

    },[])

    return(
        <>
        {/* <Container maxWidth="xxl">
        <CardListContainer title={"Prime selection"}/>
        </Container> */}
        {
            (loading)
        
            ?

            ( <Loading/> ) 
        
            :
            <div>
                <Container maxWidth="xxl">
                    <CardItemList products={products} title={"Prime selection"}/>
                </Container>
                <Container maxWidth="xxl">
                    <CardItemList products={products} title={"sale"}/>
                </Container> 
            </div>
        }
        </>
    )
}

export default Home