import './components/NavBar/NavBar';
import './App.scss';
import ResponsiveNavBar from './components/NavBar/NavBar';
import CardListContainer from './components/MainSection/CardListContainer/CardListContainer';
import ItemDetailContainer from './components/MainSection/ItemDetailContainer/ItemDetailConatiner';
import { Container} from '@mui/material';

function App() {
  return (
    
    <div className="App">
      <ResponsiveNavBar/>
      <Container maxWidth="xxl">
        <CardListContainer title={"Prime selection"}/>
      </Container>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
