import React from 'react';
import './App.scss';
import {
    Container,
    Row,
    Col,
    Spinner
} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {
    Sidebar,
    Header,
    Home,
    Content
} from './component';

const post = [
    {
        id: 1,
        header: "Post Header is a good header",
        description: "this is a good post you should get to read it",
        content: "The post is good to be at the first place. How are you, how are you reading the post I dont know. I think you are stupid",
        createdAt: "20-10-2020 12:22:22"
    },
    {
        id: 1,
        header: "Post Header is a good header",
        description: "this is a good post you should get to read it",
        content: "The post is good to be at the first place. How are you, how are you reading the post I dont know. I think you are stupid",
        createdAt: "20-10-2020 12:22:22"
    }
]

function App() {
    const [loading, setLoading] = React.useState(false);
    const [state, setState] = React.useState(true);
    const [postId, setPostId] = React.useState(0);
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

    const changeState = () => {
        setState(!state)
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }

    const selectPost = (id) => {
        setLoading(true);
        setPostId(id);
        changeState();
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
                        <Col xs={3} id="sidebar-wrapper">
                            <Switch>
                                <Route path="/">
                                    <Sidebar state={true} selectCat={selectCategory} selectT={selectType}/>
                                </Route>
                                <Route path="/post/content/">
                                    <Sidebar state={false} selectCat={selectCategory} selectT={selectType}/>
                                </Route>
                            </Switch>
                        </Col>
                        <Col xs={7} id="page-content-wrapper">
                            <Switch>
                                <Route exact path="/">
                                    <Home post={post}/>
                                </Route>
                                <Route path="/post">
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
