import React from 'react';
import '../App.scss';
import {Card} from "react-bootstrap";

function ListContent() {
    return (
        <Card bg={"light"}>
            <a href="">
                <Card.Body>
                    <Card.Title>Card Title Card Title Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    );
}

export default ListContent;
