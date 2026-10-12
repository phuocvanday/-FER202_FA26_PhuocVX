import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { OWNER_NAME } from '../data/portfolio';

const HomePage = () => (
  <div className="py-5 text-center">
    <h1 className="display-5 fw-bold">{`Xin chào, mình là ${OWNER_NAME}`}</h1>
    <p className="lead text-muted mb-4">
      Sinh viên Kỹ thuật phần mềm FPT, đang học React và xây dựng giao diện web.
    </p>
    <Button as={Link} to="/projects" size="lg">
      Xem dự án của mình
    </Button>
  </div>
);

export default HomePage;
