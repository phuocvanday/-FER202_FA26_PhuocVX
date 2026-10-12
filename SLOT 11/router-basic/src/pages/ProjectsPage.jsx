import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { projects } from '../data/portfolio';

const ProjectsPage = () => (
  <>
    <h2 className="mb-4">Dự án</h2>
    <Row xs={1} md={3} className="g-4">
      {projects.map(({ id, title, description, tech }) => (
        <Col key={id}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted small">{tech}</Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  </>
);

export default ProjectsPage;
