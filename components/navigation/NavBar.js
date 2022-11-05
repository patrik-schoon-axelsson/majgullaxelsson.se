import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const NavBar = (props) => {
    return (
            <Navbar bg="light" expand="lg">
                <Container fluid>
                <Navbar.Brand className="mr-5 d-none d-sm-block">
                    <Link href={"/"}>MajgullAxelsson.se</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Nav.Link href={"/"} className="nav-link">Hem</Nav.Link>
                        <Nav.Link href={"/nyheter"}>Nyheter</Nav.Link>
                        <Nav.Link href={"/bocker"}>Böcker</Nav.Link>
                        <Nav.Link href={"/om-majgull"}>Om Majgull</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )  
};

export default NavBar