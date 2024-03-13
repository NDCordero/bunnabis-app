import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import ItemDetailContainer from './components/itemDetailContaniner/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Bunnabis!' />} />
        <Route path='/categories/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/nosotros' element={<h4 className='m-3'>Proximamente sabrás mas de nosotros...</h4>}/>
        <Route path='/categories/novedades' element={<h4 className='m-3'>Acá vas a encontrar todas las novedades...</h4>}/>
        <Route path='/categories/ofertas' element={<h4 className='m-3'>En esta sección vas a encontrar ofertas especiales...</h4>}/>
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='*' element={<h4 className='m-3'>404: Page not fund</h4>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;