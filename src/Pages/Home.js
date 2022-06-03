import { Container} from '@mui/material';
import CardListContainer from '../components/MainSection/CardListContainer/CardListContainer';

const Home =()=> {
    return(
        <Container maxWidth="xxl">
            <CardListContainer title={"Prime selection"}/>
        </Container>
    )
}

export default Home