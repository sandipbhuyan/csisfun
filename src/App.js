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

function App() {
    const [loading, setLoading] = React.useState(false);
    const data = [1, 2];
    const [state, setState] = React.useState(0);
    const [postId, setPostId] = React.useState(0);
    const [category, setCategory] = React.useState(0);
    const [type, setType] = React.useState("")
    const selectCategory = (categoryId) => {
        setLoading(true);
        setCategory(categoryId);
    }
    const selectType = (type) => {
        setLoading(true);
        setType(type);
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
                        <Sidebar state={1} selectCat={selectCategory} selectT={selectType}/>
                    </Col>
                    <Col xs={7} id="page-content-wrapper">
                        <section className={"main-content"}>
                            {
                                data.map(val => ( <><ListContent /> <hr/></>))
                            }
                        </section>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default App;
