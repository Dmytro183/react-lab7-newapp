import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contacts() {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nВідгук: ${feedback}`);
  };

  return (
    <Container className="mt-5">
      <h2>Зв'язок із нами</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formFeedback" className="mt-3">
          <Form.Label>Відгук</Form.Label>
          <Form.Control as="textarea" rows={3} value={feedback} onChange={e => setFeedback(e.target.value)} required />
        </Form.Group>
        <Button type="submit" className="mt-3">Надіслати</Button>
      </Form>
    </Container>
  );
}

export default Contacts;
