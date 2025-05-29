import React from 'react';
import CarouselBoxHk from '../components/CarouselBoxHk';
import { Container, Card, Button } from 'react-bootstrap';

function Home() {
  return (
    <>
      <CarouselBoxHk />
      <Container>
        <h2 className="text-center m-4">Our team</h2>
        <div className="row">
          <div className="col">
            <Card className="m-4 text-center" bg="light" border="primary">
              <Card.Img variant="top" src="https://qwertify.io/wp-content/uploads/2021/04/Team.jpeg" />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>Команда 1</Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </div>
          {/* Додай ще дві команди за аналогією */}
        </div>
      </Container>
    </>
  );
}

export default Home;
