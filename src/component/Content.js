import React from 'react';
import {Container} from 'react-bootstrap';
import Parser from 'html-react-parser'
import Data from './Data';
import '../styles/Content.scss';
import {withRouter, } from "react-router";

function Content(props) {
    const [postId, setPostId] = React.useState(props.match.params.id)
    return (
        <div>
            {Parser(Data.content)}
        </div>
    );
}

export default withRouter(Content);
