import React from 'react';
import '../styles/ListContent.scss';
import {Card} from "react-bootstrap";
import {
    Link
} from "react-router-dom";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en';
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

function ListContent({id, header, description, content, createdAt}) {
    return (
        <>
            <Link to={"/post/" + id} className={"list-content"}>
                <Card bg={"light"}>
                    <Card.Body>
                        <Card.Title className={"blog-list-content"} as={"h4"}>{header}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                        <Card.Text>
                            {content}
                        </Card.Text>

                        <Card.Text>
                            <small className="text-muted">{timeAgo.format(Date.parse(createdAt), 'round')}</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <hr/>
        </>
    );
}

export default ListContent;
