import { Container} from '@mui/material';
import { useParams } from 'react-router-dom';
//Components
import CardListContainer from '../components/MainSection/CardListContainer/CardListContainer';

const Products =()=> {
    const {category} = useParams()

    return(
        <div>
            <Container maxWidth="xxl">
                <h2>{category}</h2>
                <CardListContainer category={category}/>
            </Container> 
        </div>
        )
}

export default Products