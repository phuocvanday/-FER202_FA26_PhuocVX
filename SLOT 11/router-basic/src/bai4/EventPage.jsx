import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const EventPage = () => {
  const navigate = useNavigate();

  return (
    <Card className="mx-auto" style={{ maxWidth: 560 }}>
      <Card.Body>
        <Card.Title as="h1" className="h3">FPTU Tech Day 2026</Card.Title>
        <Card.Text>
          Ngày hội công nghệ dành cho sinh viên FPT: workshop React, AI, Cloud và gặp gỡ doanh nghiệp.
        </Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>Thời gian: 20/11/2026 – Buổi sáng và buổi chiều</ListGroup.Item>
        <ListGroup.Item>Địa điểm: Hội trường Đại học FPT</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button onClick={() => navigate('/register')}>Đăng ký ngay</Button>
      </Card.Body>
    </Card>
  );
};

export default EventPage;
