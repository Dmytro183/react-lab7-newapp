import React, { Component } from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';

export class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item><Nav.Link eventKey="first">Design</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="second">Team</Nav.Link></Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img className="d-block w-100" src="https://i.pinimg.com/...jpg" alt="..." />
                  <p>Контент...</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img className="d-block w-100" src="https://...jpg" alt="..." />
                  <p>Контент...</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default About;
