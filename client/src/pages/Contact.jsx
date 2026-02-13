import { Row, Col, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <section className="py-5">
      <Row>
        <Col md={8} className="mx-auto text-light">
          <h2>Contact Wanted Minds</h2>
          <p>Reach out to our Tokyo office for confidential inquiries.</p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <Button variant="outline-light" type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
}