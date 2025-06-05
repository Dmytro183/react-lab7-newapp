import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Modal
} from "react-bootstrap";

function Header() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Після валідації — відправка на бекенд або перевірка
    handleClose();
  };

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Nakolesah</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Головна</Nav.Link>
              <Nav.Link href="/about">Про нас</Nav.Link>
              <Nav.Link href="/contacts">Контакти</Nav.Link>
              <Nav.Link href="/blog">Блог</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="text" placeholder="Пошук" className="me-2" />
              <Button variant="outline-info">Знайти</Button>
            </Form>
            <Button variant="outline-light" className="ms-3" onClick={handleShow}>
              Увійти
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal login */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Авторизація</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введіть email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Увійти
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
