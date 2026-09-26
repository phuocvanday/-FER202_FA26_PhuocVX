import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { services } from '../data/pizzaData';

const BookingForm = () => (
  <section id="contact" className="py-5">
    <Container>
      <h2 className="section-title text-center mb-4">Book Your Table</h2>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row className="g-3 mb-4">
          <Col md={4}>
            <Form.Control type="text" placeholder="Your Name *" required aria-label="Your Name" />
          </Col>
          <Col md={4}>
            <Form.Control type="email" placeholder="Your Email *" required aria-label="Your Email" />
          </Col>
          <Col md={4}>
            <Form.Select defaultValue="" aria-label="Select a Service">
              <option value="" disabled>
                Select a Service
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Please write your comment"
          className="mb-4"
          aria-label="Comment"
        />
        <Button type="submit" variant="warning" className="send-btn text-white fw-bold px-4">
          Send Message
        </Button>
      </Form>
    </Container>
  </section>
);

export default BookingForm;
