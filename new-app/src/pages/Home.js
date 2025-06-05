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
        <h2 className="text-center mb-4">Популярні товари</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="text-center" bg="light" border="primary">
              <Card.Img variant="top" src={team1} alt="Team 1" />
              <Card.Body>
                <Card.Title>Michelin X-Ice 205/55 R16</Card.Title>
                <Card.Text>Зимова шина з високою зчепленням на льоду</Card.Text>
                <Button variant="primary" href="/team1">Детальніше</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="text-center" bg="light" border="success">
              <Card.Img variant="top" src={team2} alt="Team 2" />
              <Card.Body>
                <Card.Title>Диск R17 Replay FD45</Card.Title>
                <Card.Text>Литий диск 5x114.3, стильний дизайн</Card.Text>
                <Button variant="success" href="/team2">Детальніше</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="text-center" bg="light" border="warning">
              <Card.Img variant="top" src={team3} alt="Team 3" />
              <Card.Body>
                <Card.Title>Комплект Kumho WinterCraft</Card.Title>
                <Card.Text>205/60 R16 — повний комплект зимових шин</Card.Text>
                <Button variant="warning" href="/team3">Детальніше</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
