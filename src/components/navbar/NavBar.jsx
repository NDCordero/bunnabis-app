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
                        className="d-inline-block align-middle m-0 img-fluid"
                        alt="Bunnabis logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>

                    <NavDropdown className="ms-5" title="Aceites" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Relajacion mental</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Relajacion corporal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Equilibrio</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className="ms-3" title="Cosmética Natural" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Jabones</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Shampoo</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Pasta dental</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ungüentos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bálsamos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cremas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Roll on</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className="ms-3" title="Fungi" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Melena</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cordyceps</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cola de pavo</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Reishi</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="ms-3" title="Otros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Repelentes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">BTI</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Fermento FPJ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                            <NavDropdown.Divider/>
                        </NavDropdown>
                        <Nav.Link className="ms-3" href="#link">Ofertas y Novedades</Nav.Link>
                    </Nav>
                    <CartWidget counter={10}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
