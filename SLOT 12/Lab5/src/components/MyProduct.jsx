import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const formatVND = (value) => value.toLocaleString('vi-VN') + ' ₫';

const MyProduct = ({ product }) => {
  const { id, name, description, price, discount, instock, rating, category } = product;
  const finalPrice = Math.round(price * (1 - discount / 100));
  const stars = Math.round(rating);

  return (
    <Card className="h-100 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Badge bg="primary">{category}</Badge>
        <small className="text-muted">#{id}</small>
      </Card.Header>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <div className="mt-auto">
          <div className="text-warning mb-2" aria-label={`Đánh giá ${rating}/5`}>
            {'★'.repeat(stars)}
            {'☆'.repeat(5 - stars)}
            <span className="text-muted ms-1">{rating.toFixed(1)}</span>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="fs-5 fw-bold text-danger">{formatVND(finalPrice)}</span>
            {discount > 0 && (
              <>
                <del className="text-muted small">{formatVND(price)}</del>
                <Badge bg="danger">-{discount}%</Badge>
              </>
            )}
          </div>
          <Badge bg={instock ? 'success' : 'secondary'}>
            {instock ? 'Còn hàng' : 'Hết hàng'}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyProduct;
