import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/Contador/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <ItemListContainer greeting= "ItemListContainer desde App"/>
      </header>
      <ItemCount/>
    </div>
  );
}

export default App;
