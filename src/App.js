import React from 'react';
import './App.scss';
import {Container, Row, Col, Spinner } from "react-bootstrap";
import { Sidebar, Header } from './component';
function App() {
  return (
      <Container fluid>
          <Header />
          <hr />
        <Row>
          <Col xs={3} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col  xs={9} id="page-content-wrapper">
              <Spinner animation="grow" />
          </Col>
        </Row>

      </Container>
  );
}

export default App;
