import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import CarouselBoxHk from '../components/CarouselBoxHk';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';

function Home() {
  return (
    <>
      {/* Карусель */}
      <CarouselBoxHk />

      {/* Секція Our team */}
      <Container className="mt-5 pt-5">
        <h2 className="text-center mb-4">Our team</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="text-center" bg="light" border="primary">
              <Card.Img variant="top" src={team1} alt="Team 1" />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Команда 1</Card.Text>
                <Button variant="primary" href="/team1">About team</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="text-center" bg="light" border="success">
              <Card.Img variant="top" src={team2} alt="Team 2" />
              <Card.Body>
                <Card.Title>Designers</Card.Title>
                <Card.Text>Команда 2</Card.Text>
                <Button variant="success" href="/team2">About team</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="text-center" bg="light" border="warning">
              <Card.Img variant="top" src={team3} alt="Team 3" />
              <Card.Body>
                <Card.Title>Marketing</Card.Title>
                <Card.Text>Команда 3</Card.Text>
                <Button variant="warning" href="/team3">About team</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
