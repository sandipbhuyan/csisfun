import React from 'react';
import '../App.scss';
import { Card, ListGroup} from "react-bootstrap";

function Sidebar() {
    return (
        <Card>
            <Card.Header>Contents</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item className={"toc-link"} onClick={() => alert("demo")}>Cras justo odio</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default Sidebar;
