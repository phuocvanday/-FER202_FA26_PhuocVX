import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const YEAR = new Date().getFullYear();

const Footer = () => (
  <footer className="bg-dark text-light pt-4 pb-3 mt-auto">
    <Container>
      <Row className="g-4">
        <Col md={5}>
          <h5>Lab5</h5>
          <p className="text-secondary mb-0">
            Website demo môn FER202 – xây dựng ứng dụng React nhiều trang với React Router và
            React-Bootstrap.
          </p>
        </Col>
        <Col md={3}>
          <h5>Liên kết</h5>
          <ul className="list-unstyled mb-0">
            <li><Link to="/" className="link-light text-decoration-none">Home</Link></li>
            <li><Link to="/about" className="link-light text-decoration-none">About</Link></li>
            <li><Link to="/new" className="link-light text-decoration-none">New</Link></li>
            <li><Link to="/contact" className="link-light text-decoration-none">Contact</Link></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Liên hệ</h5>
          <address className="text-secondary mb-0">
            Trường Đại học FPT
            <br />
            Email: <a href="mailto:lab5@fpt.edu.vn" className="link-light">lab5@fpt.edu.vn</a>
            <br />
            Điện thoại: 0123 456 789
          </address>
        </Col>
      </Row>
      <hr className="border-secondary" />
      <p className="text-center text-secondary small mb-0">
        © {YEAR} Lab5 – FER202. All rights reserved.
      </p>
    </Container>
  </footer>
);

export default Footer;
