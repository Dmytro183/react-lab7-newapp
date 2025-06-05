import React from "react";
import {
  Container,
  Tab,
  Row,
  Col,
  Nav,
  Image
} from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5 pt-5">
      <h2 className="text-center mb-4">Про наш магазин</h2>
      <Tab.Container id="left-tabs-example" defaultActiveKey="about">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="about">Про нас</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="delivery">Доставка і оплата</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="warranty">Гарантія</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="return">Повернення</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="whyus">Чому обирають нас</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="about">
                <Image
                  src="https://images.pexels.com/photos/4489741/pexels-photo-4489741.jpeg"
                  fluid
                  className="mb-3"
                />
                <p>Ми — спеціалізований інтернет-магазин шин та дисків з великим асортиментом, якісним сервісом та швидкою доставкою по Україні.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="delivery">
                <Image
                  src="https://images.pexels.com/photos/6169661/pexels-photo-6169661.jpeg"
                  fluid
                  className="mb-3"
                />
                <p>Ми співпрацюємо з Новою Поштою та іншими службами. Оплата: післяплата, карта, безготівка для юросіб.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="warranty">
                <Image
                  src="https://images.pexels.com/photos/7648028/pexels-photo-7648028.jpeg"
                  fluid
                  className="mb-3"
                />
                <p>Уся продукція сертифікована. Даємо гарантію від 12 місяців. Можливість повернення у разі виробничого браку.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="return">
                <p>Повернення товару протягом 14 днів відповідно до закону “Про захист прав споживачів”.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="whyus">
                <p>✅ Власний склад.<br />
                   ✅ Кваліфікована підтримка.<br />
                   ✅ Понад 5000 найменувань шин та дисків.<br />
                   ✅ Регулярні знижки та акції.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default About;
