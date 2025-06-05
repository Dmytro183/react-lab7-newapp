import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

function Blog() {
  return (
    <Container className="mt-5 pt-5">
      <h2 className="mb-4 text-center">Корисні поради та новини</h2>
      <Row>
        {/* Основна частина блогу */}
        <Col md={9}>
          {/* Пост 1 */}
          <Card className="mb-4">
            <Card.Img variant="top" src="https://images.pexels.com/photos/207573/pexels-photo-207573.jpeg" />
            <Card.Body>
              <Card.Title>Як вибрати зимову гуму?</Card.Title>
              <Card.Text>
                Вибір зимової шини — це безпека на дорозі. У статті розповідаємо, як обрати правильний розмір, індекс навантаження та малюнок протектора.
              </Card.Text>
              <Button variant="primary" href="/blog/post1">Читати далі</Button>
            </Card.Body>
          </Card>

          {/* Пост 2 */}
          <Card className="mb-4">
            <Card.Img variant="top" src="https://images.pexels.com/photos/1240891/pexels-photo-1240891.jpeg" />
            <Card.Body>
              <Card.Title>Новинки шин 2025 року</Card.Title>
              <Card.Text>
                Michelin, Continental та Goodyear вже представили нові моделі літньої гуми. Ми зібрали огляд найцікавіших новинок.
              </Card.Text>
              <Button variant="primary" href="/blog/post2">Читати далі</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Бокова колонка з категоріями */}
        <Col md={3}>
          <h5>Категорії</h5>
          <ListGroup>
            <ListGroup.Item action href="#winter">Зимові шини</ListGroup.Item>
            <ListGroup.Item action href="#summer">Літні шини</ListGroup.Item>
            <ListGroup.Item action href="#diski">Литі диски</ListGroup.Item>
            <ListGroup.Item action href="#advices">Поради водіям</ListGroup.Item>
            <ListGroup.Item action href="#tests">Тести шин</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
