import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { skills } from '../data/portfolio';

const SkillsPage = () => (
  <>
    <h2 className="mb-4">Kỹ năng</h2>
    <ListGroup>
      {skills.map(({ name, level }) => (
        <ListGroup.Item key={name} className="d-flex justify-content-between align-items-center">
          {name}
          <Badge bg={level === 'Đang học' ? 'secondary' : 'primary'}>{level}</Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </>
);

export default SkillsPage;
