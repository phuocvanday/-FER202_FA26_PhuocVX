import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const HomePage = () => (
  <Container className="mt-4 text-center">
    <h1 className="display-5 fw-bold">Trang Chủ</h1>
    <p className="lead text-muted mb-4">Chào mừng bạn đến với trang web cá nhân!</p>
    <Button as={Link} to="/projects" variant="primary">
      Xem dự án của mình
    </Button>  </Container>
);
