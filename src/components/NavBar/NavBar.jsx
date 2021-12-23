import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../Cart/CartWidget'

function NavBar() {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Container>

                    <Navbar.Brand href="/">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">

                            <Link to="/productos/gorras"> Gorras </Link>
                            <Link to="/productos/remeras"> Remeras </Link>

                        </Nav>

                        <Nav>

                        <Link to="/cart">Carrito</Link>
                        
                        </Nav>

                    </Navbar.Collapse>

                    <CartWidget/>

                </Container>

            </Navbar>
        </>
    )
}

export default NavBar