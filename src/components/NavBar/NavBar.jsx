import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Pokelogo from './img/Pokelogo.png'
import './Navbar.css'
import CartWidget from '../Cart/CartWidget'

function NavBar() {
    return(
        <>
            <Navbar className='pokenav' collapseOnSelect expand="lg">

                <Container className='pokenav__container'>
                    
                    <Link to="/" className='pokelink__nav' >
                        <img className='img-fluid' alt='logo' src={Pokelogo}/>
                    </Link>

                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link>

                                <Link to="/productos/grass" className='pokelink pokelink__nav' >Tipo Planta</Link>
                                <Link to="/productos/water" className='pokelink pokelink__nav' >Tipo Agua</Link>
                                <Link to="/productos/fire" className='pokelink pokelink__nav' >Tipo Fuego</Link>
                                <Link to="/productos/special" className='pokelink pokelink__nav'>Especiales</Link>
                            </Nav.Link>
                            
                        </Nav>

                        <Nav>

                        <CartWidget/>
                        
                        </Nav>

                    </Navbar.Collapse>

                    

                </Container>

            </Navbar>
        </>
    )
}

export default NavBar