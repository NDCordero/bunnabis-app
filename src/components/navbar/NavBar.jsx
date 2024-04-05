import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './navBar.css'

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>
                    <img src="/images/Isologo.png" className="d-inline-block align-middle m-0 img-fluid imagen-nav" alt="Bunnabis logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link className="ms-3" as={NavLink} to='/'>Inicio</Nav.Link>
                        <Nav.Link className="ms-3" as={NavLink} to='/nosotros'>Nosotros</Nav.Link>
                        <NavDropdown className="ms-3" title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/categories/aceites'>Aceites</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/categories/cosmetica natural'>Cosmética Natural</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/categories/fungi'>Fungi</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/categories/otros'>Otros</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="ms-3" as={NavLink} to='/categories/novedades'>Novedades</Nav.Link>
                        <NavLink className="ms-3" to='/cart'>
                            <CartWidget counter={10} />
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
