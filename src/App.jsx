import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext';

function App() {

  return (

    <div className='App'>

      <div className='background'>

        <CartContextProvider>

          <BrowserRouter>

            <header className="App-header">
              <Navbar/>
            </header>

            <center className='AppCenter'>
              
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

                <Route
                exact
                path="/cart"
                element= { <Cart/> }
                />

              </Routes>

            </center>

          </BrowserRouter>

        </CartContextProvider>

      </div>

    </div>
  );
}

export default App;
