import { Container} from '@mui/material';
//Components
import CardListContainer from '../components/MainSection/CardListContainer/CardListContainer';
//Style
import './home.scss'

const Home =()=> {

    return(
        <>
        {
            <div className='home-conteiner'>
                <Container maxWidth="xxl" className='Prime-selection'>
                    <CardListContainer  title={"Prime selection"}/>
                </Container>
                <Container maxWidth="xxl" className='Get-started'>
                    <CardListContainer  title={"Get started"}/>
                </Container>
                <Container maxWidth="xxl" className='Modify-your-table'>
                    <CardListContainer  title={"Modify your table"}/>
                </Container> 
            </div>
            
        }
        </>
    )
}

export default Home