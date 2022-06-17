import { Container} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
//Components
import CardItemList from '../components/MainSection/CardItemList/CardItemList';
//Fuctions
import getProducts from '../fuctions/getProducts';
import Loading from '../fuctions/loading';

const Products =()=> {
    const [products, setProducts] = useState([])
    const {category} = useParams()
    const [loading, setLoading]= useState(true)

    useEffect(()=>{

        getProducts()
        .then( (response) => {
            setLoading(false)
            setProducts( category ? response.filter( product => product.category === category) : response )
        })
        .catch((err) => {
            console.log("fallo la llamada.", err)
        })
        .finally( ()=> {
        })

    },[category])

    return(
        <>
        {
            (loading)
        
            ?

            ( <Loading/> ) 
        
            :
            <div>
                <Container maxWidth="xxl">
                    <CardItemList products={products}/>
                </Container> 
            </div>
        }
        </>
        
        )
}

export default Products