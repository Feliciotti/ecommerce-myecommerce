import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <header className="App-header">
          <NavBar/>
        </header>

        <center>
          
          <Routes>

            <Route
            exact
            path="/"
            element= { <ItemListContainer greeting= "ItemListContainer desde App" />}
            />

            <Route 
            exact
            path="/productos/:idProd"
            element= { <ItemListContainer greeting= "ItemListContainer desde App" /> }
            />

            <Route
            exact
            path="/detalles/:id"
            element= { <ItemDetailContainer/> }
            />

          </Routes>

        </center>

      </BrowserRouter>

    </div>
  );
}

export default App;
