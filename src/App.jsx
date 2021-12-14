import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/Contador/ItemCount';
import ItemDetail from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <ItemListContainer greeting= "ItemListContainer desde App"/>
      <ItemDetail/>
      <ItemCount/>
    </div>
  );
}

export default App;
