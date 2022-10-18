import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const NavBar = (props) => {
    return (
            <Navbar bg="light" expand="lg">
                <Container fluid>
                <Navbar.Brand className="mr-5">
                    MajgullAxelsson.se
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Nav.Link><Link href={"/"}>Hem</Link></Nav.Link>
                        <Nav.Link><Link href={"/nyheter"}>Nyheter</Link></Nav.Link>
                        <Nav.Link><Link href={"/bocker"}>Böcker</Link></Nav.Link>
                        <Nav.Link><Link href={"/om-majgull"}>Om Majgull</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )  
};

export default NavBar