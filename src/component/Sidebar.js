import React from 'react';
import '../App.scss';
import { Card, ListGroup} from "react-bootstrap";

function Sidebar() {
    return (
        <Card>
            <Card.Header>Contents</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default Sidebar;
