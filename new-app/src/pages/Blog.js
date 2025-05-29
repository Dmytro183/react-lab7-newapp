import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function Blog() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={9}>
          <div className="d-flex align-items-center me-5">
            <img width={150} height={150} src="https://..." alt="..." className="me-3" />
            <div><h5>Blog Post</h5><p>Опис...</p></div>
          </div>
          {/* Додай інші пости */}
        </Col>
        <Col md={3}>
          <h5 className="text-center mt-5">Категорії</h5>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>Категорія 1</ListGroup.Item>
              <ListGroup.Item>Категорія 2</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
