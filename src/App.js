import React from 'react';
import './App.scss';
import {
    Container,
    Row,
    Col,
    Spinner
} from "react-bootstrap";
import {
    Sidebar,
    Header,
    ListContent
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
                <Row>
                    <Col xs={3} id="sidebar-wrapper">
                        <Sidebar state={state} selectCat={selectCategory} selectT={selectType}/>
                    </Col>
                    <Col xs={7} id="page-content-wrapper">
                        <section className={"main-content"}>
                            {
                                post.map(val =>
                                    <ListContent
                                        id={val.id}
                                        header={val.header}
                                        description={val.description}
                                        content={val.content}
                                        createdAt={val.createdAt}
                                        selectPost={selectPost}
                                    />
                                )
                            }
                        </section>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default App;
