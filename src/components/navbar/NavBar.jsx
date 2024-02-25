import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="./images/isologo.png"
                        width="60"
                        height="60"
                        className="d-inline-block align-middle me-2"
                        alt="Bunnabis logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-5">
                        <Nav.Link className="me-3" href="#home">Mas vendidos</Nav.Link>
                        <Nav.Link className="me-3" href="#link">Novedades</Nav.Link>
                        <NavDropdown className="me-3" title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Aceites</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cosmética Natural</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Fungi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.5">Ofertas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget counter={10}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;