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
                        <Nav.Item><Link href={"/"}>Hem</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )  
};

export default NavBar