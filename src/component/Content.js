import React from 'react';
import {Container} from 'react-bootstrap';
import Parser from 'html-react-parser'
import Data from './Data';
import '../styles/Content.scss';
import {withRouter, } from "react-router";

function Content(props) {
    return (
        <div>
            {props.match.params.id}
            {Parser(Data.content)}
        </div>
    );
}

export default withRouter(Content);
