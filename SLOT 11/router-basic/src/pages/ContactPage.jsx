import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { contact } from '../data/portfolio';

const ContactPage = () => (
  <>
    <h2 className="mb-4">Liên hệ</h2>
    <Card style={{ maxWidth: 480 }}>
      <ListGroup variant="flush">
        <ListGroup.Item>
          {'Email: '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </ListGroup.Item>
        <ListGroup.Item>
          {'GitHub: '}
          <a href={contact.github} target="_blank" rel="noreferrer">{contact.github}</a>
        </ListGroup.Item>
        <ListGroup.Item>{`Điện thoại: ${contact.phone}`}</ListGroup.Item>
      </ListGroup>
    </Card>
  </>
);

export default ContactPage;
