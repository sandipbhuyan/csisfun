import React from 'react';
import '../App.scss';
import {
    Navbar,
    Container,
    Nav
} from "react-bootstrap";
import logo from '../assets/logo.svg';

function Header() {
    return (
        <Container fluid>
            <Navbar bg="light">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width={"300"}
                        height={"auto"}
                        className="d-inline-block align-top"
                        alt="Cs IS Fun logo"
                    />
                </Navbar.Brand>
            </Navbar>
            <Navbar bg="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;
