import React from 'react';
import {Container} from 'react-bootstrap';
import Parser from 'html-react-parser'
import Data from './Data';
import '../styles/Content.scss';

function Content() {
    return (
        <div>
            {Parser(Data.content)}
        </div>
    );
}

export default Content;
