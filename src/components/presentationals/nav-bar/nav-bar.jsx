import "./nav-bar.css"
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import CartWidgetContainer from "../../containers/nav-bar/cart-widget.container";

const NavBar = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to={`/`} as={NavLink}>Tricolor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <NavDropdown.Item to={"/products"} as={NavLink}>Todos</NavDropdown.Item>
                                {
                                    props.categories ? props.categories.map(c => (
                                        <NavDropdown.Item key={c.id} to={`/products/category/${c.name}`} as={NavLink}>
                                            {c.name}
                                        </NavDropdown.Item>
                                    )) : ""
                                }
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <NavLink to={"/cart"}><CartWidgetContainer/></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;