import React from 'react';
import './App.scss';
import {
    Container,
    Row,
    Col,
    Spinner
} from "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom'
import {
    Switch,
    Route
} from "react-router";

import {
    Sidebar,
    Header,
    Home,
    Content
} from './component';

import Data from './component/Data'

function App() {
    const [loading, setLoading] = React.useState(false);
    const [state, setState] = React.useState(true);
    const [category, setCategory] = React.useState(0);
    const [type, setType] = React.useState("")
    const selectCategory = (categoryId) => {
        setLoading(true);
        setCategory(categoryId);
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }
    const selectType = (type) => {
        setLoading(true);
        setType(type);
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }

    return (
        <div>
            {
                loading ? (
                    <div className={"loading-container"}>
                        <Spinner animation="grow"/>
                    </div>
                ) : (<></>)
            }
            <Header/>
            <hr/>
            <Container fluid>
                <Router>
                    <Row>
                        <Col md={2} id="sidebar-wrapper">
                            <Switch>
                                <Route exact path="/">
                                    <Sidebar state={true} selectCat={selectCategory} selectT={selectType}/>
                                </Route>
                            </Switch>
                        </Col>
                        <Col md={7} id="page-content-wrapper">
                            <Switch>
                                <Route exact path="/">
                                    <Home post={Data.createDummyPost(20)}/>
                                </Route>
                                <Route path="/post/:id">
                                    <Content/>
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Router>
            </Container>

        </div>
    );
}

export default App;
