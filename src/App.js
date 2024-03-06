import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import ItemDetailContainer from './components/itemDetailContaniner/ItemDetailContainer';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a Bunnabis!'/>
      <ItemDetailContainer/>

    </div>
  )
}

export default App;