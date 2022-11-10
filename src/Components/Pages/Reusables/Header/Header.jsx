import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Gallery-Pexels</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Gallery</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header