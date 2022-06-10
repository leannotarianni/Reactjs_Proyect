import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ResponsiveNavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import DetailProducts from './Pages/DetailProducts';
import NotFound from './Pages/NotFound';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    
    <div>
      <CartProvider>
        <BrowserRouter>
          <ResponsiveNavBar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Products/:category' element={<Products />}></Route>
            <Route path='/Product/:id' element={<DetailProducts />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>     
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
