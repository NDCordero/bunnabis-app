import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import ItemDetailContainer from './components/itemDetailContaniner/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer'
import Form from './components/form/Form'
import { CartProvider } from './context/CartContext';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Nosotros from './components/nosotros/Nosotros';
import Novedades from './components/novedades/Novedades';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Bunnabis!' />} />
          <Route path='/categories/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/categories/novedades' element={<Novedades/ >} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/form' element={<Form />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;