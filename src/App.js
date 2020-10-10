import React from 'react';
import './App.scss';
import {
    Container,
    Row,
    Col,
    Spinner,
    Card,
    Dropdown,
    DropdownButton
} from "react-bootstrap";
import {
    Sidebar,
    Header,
    ListContent
} from './component';

function App() {
    const [loading, setLoading] = React.useState(false);
    const data = [1,2,3,4,5,6,7,8,9];
    return (
        <Container fluid>
            {
                loading ? (
                    <div className={"loading-container"}>
                        <Spinner animation="grow"/>
                    </div>
                ) : (<></>)
            }
            <Header/>
            <hr/>
            <Row>
                <Col xs={3} id="sidebar-wrapper">
                    <Sidebar/>
                </Col>
                <Col xs={7} id="page-content-wrapper">
                    <section className={"main-content"}>
                        {
                            data.map(val => ( <><ListContent /> <hr/></>))
                        }
                    </section>
                </Col>
                <Col xs={2} id="page-content-wrapper">
                    <Card>
                        <Card.Header>Select Category</Card.Header>
                        <Card.Body>
                            <DropdownButton
                                variant={"info"}
                                title={"Section Section"}
                            >
                                <Dropdown.Item onClick={() => alert("Gmail")}>Action</Dropdown.Item>
                                <Dropdown.Item onClick={() => alert("Gmail")}>Another action</Dropdown.Item>
                                <Dropdown.Item onClick={() => alert("Gmail")}>Something else</Dropdown.Item>
                            </DropdownButton >
                            <hr/>
                            <DropdownButton
                                variant={"info"}
                                title={"Section Type"}
                            >
                                <Dropdown.Item onClick={() => alert("Gmail")}>Quetions</Dropdown.Item>
                                <Dropdown.Item onClick={() => alert("Gmail")}>Post</Dropdown.Item>
                                <Dropdown.Item onClick={() => alert("Gmail")}>Something else</Dropdown.Item>
                            </DropdownButton >
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default App;
