import { Link, Navigate, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SuccessPage = () => {
  const data = useLocation().state;

  if (!data) return <Navigate to="/register" replace />;

  return (
    <Card className="mx-auto text-center" style={{ maxWidth: 560 }} border="success">
      <Card.Body>
        <Card.Title as="h1" className="h3 text-success">Đăng ký thành công!</Card.Title>
        <Card.Text className="mb-1">{`Cảm ơn ${data.name}, vé đã gửi tới ${data.email}.`}</Card.Text>
        <Card.Text>{`Buổi tham dự: ${data.session}`}</Card.Text>
        <div className="d-flex justify-content-center gap-2">
          <Button as={Link} to="/register" variant="success">
            Đăng ký thêm người khác
          </Button>
          <Button as={Link} to="/" variant="outline-secondary">
            Về trang sự kiện
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SuccessPage;
