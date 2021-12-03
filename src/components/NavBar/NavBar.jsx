import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'

function NavBar() {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Inicio</Nav.Link>
                <Nav.Link href="#pricing">Tienda</Nav.Link>
                <NavDropdown title="Marcas" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">brand1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">brand2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">brand3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">brand4</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar