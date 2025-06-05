import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

function Contacts() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Кастомна перевірка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError("Будь ласка, введіть правильний email. Наприклад: test@example.com");
      setSuccess(false);
      return;
    }

    // Перевірка повідомлення
    if (!message || message.length < 10) {
      setError("Повідомлення має містити мінімум 10 символів");
      setSuccess(false);
      return;
    }

    // Успішно
    setError('');
    setSuccess(true);
    alert(`Ваше повідомлення надіслано!\nEmail: ${email}\nПовідомлення: ${message}`);
    setEmail('');
    setMessage('');
  };

  return (
    <Container className="mt-5 pt-5">
      <h2 className="mb-4 text-center">Зв’язок з нами</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Дякуємо! Ваш відгук надіслано.</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введіть ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Повідомлення</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Ваше повідомлення..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Надіслати
        </Button>
      </Form>
    </Container>
  );
}

export default Contacts;
