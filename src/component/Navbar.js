import React from 'react';
import '../App.scss';
import {Navbar} from "react-bootstrap";

function Header() {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Navbar>
    );
}

export default Header;
