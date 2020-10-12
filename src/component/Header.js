import React from 'react';
import '../App.scss';
import {
    Navbar,
    Nav,
    Button
} from "react-bootstrap";

function Header() {
    return (
        <div>
            <Navbar bg={"light"}>
                <Navbar.Brand>CS is Fun</Navbar.Brand>
            </Navbar>
            <Navbar bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>

                    </Nav>
                    <Button variant="outline-success">SignIn</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
