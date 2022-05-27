import './components/NavBar/NavBar';
import './App.scss';
import ResponsiveNavBar from './components/NavBar/NavBar';
import CardListContainer from './components/MainSection/CardListContainer';
import { Container} from '@mui/material';

function App() {
  return (
    
    <div className="App">
      <ResponsiveNavBar/>
      <Container maxWidth="xxl">
        <CardListContainer title={'Prime Selection'}></CardListContainer>    
      </Container>
      
    </div>
  );
}

export default App;
