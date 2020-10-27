import React from 'react';
import '../styles/Sidebar.scss';
import {Card} from "react-bootstrap";
import Data from './Data';

function ShortNote({}) {
    const [notes, setNotes] = React.useState([]);
    return (
        <Card text={"white"}>
            <Card.Header className={"sidebar-header"}>{"Notes"}</Card.Header>
            <Card.Body className={"scroll-notes"}>
                {Data.creatShortNotes(100).map((val, index) => <Card.Text key={"note-" + index}>{val.content}</Card.Text>)}
            </Card.Body>
        </Card>
    )
}

export default ShortNote;
