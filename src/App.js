import './components/NavBar/NavBar';
import './App.scss';
import ResponsiveNavBar from './components/NavBar/NavBar';
import CardList from './components/MainSection/Cardlist';
import { Container} from '@mui/material';

function App() {
  return (
    
    <div className="App">
      <ResponsiveNavBar/>
      <Container maxWidth="xxl">
        <CardList title={'Prime Selection'}></CardList>    
      </Container>
    </div>
  );
}

export default App;
