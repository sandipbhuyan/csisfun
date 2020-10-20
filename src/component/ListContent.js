import React from 'react';
import '../styles/ListContent.scss';
import {Card} from "react-bootstrap";
import {
    Link
} from "react-router-dom";

function ListContent({id, header, description, content, createdAt}) {
    return (
        <>
            <Link to={"/post"} className={"list-content"}>
                <Card bg={"light"}>
                    <Card.Body>
                        <Card.Title className={"blog-list-content"} as={"h4"}>{header}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                        <Card.Text>
                            {content}
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <hr/>
        </>
    );
}

export default ListContent;
