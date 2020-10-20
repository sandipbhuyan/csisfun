import React from 'react';
import '../App.scss';
import {
    Navbar,
} from "react-bootstrap";

function Header() {
    return (
        <div>
            <Navbar bg={"light"}>
                <Navbar.Brand>CS is Fun Navbar coming soon</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Header;
