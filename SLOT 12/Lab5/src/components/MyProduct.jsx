import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const currency = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
const formatVND = (value) => currency.format(value);

const MyProduct = ({ product, onAddToCart }) => {
  const { id, name, description, price, discount, instock, rating, category } =
    product;
  const hasDiscount = discount > 0;
  const finalPrice = Math.round(price * (1 - discount / 100));
  const stars = Math.round(rating);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      alert(`Đã thêm "${name}" vào giỏ hàng`);
    }
  };

  return (
    <Card className={`h-100 shadow-sm ${instock ? '' : 'opacity-75'}`}>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Badge bg="primary">{category}</Badge>
        <div className="d-flex align-items-center gap-2">
          {hasDiscount && <Badge bg="danger">-{discount}%</Badge>}
          <small className="text-muted">#{id}</small>
        </div>
      </Card.Header>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <div className="mt-auto">
          <div
            className="text-warning mb-2"
            aria-label={`Đánh giá ${rating}/5`}
          >
            {'★'.repeat(stars)}
            {'☆'.repeat(5 - stars)}
            <span className="text-muted ms-1">{rating.toFixed(1)}/5</span>
          </div>
          <div className="d-flex align-items-baseline gap-2 mb-2">
            <span className="fs-5 fw-bold text-danger">
              {formatVND(finalPrice)}
            </span>
            {hasDiscount && (
              <del className="text-muted small">{formatVND(price)}</del>
            )}
          </div>
          <Badge bg={instock ? 'success' : 'secondary'}>
            {instock ? 'Còn hàng' : 'Hết hàng'}
          </Badge>
        </div>
      </Card.Body>
      <Card.Footer className="bg-white border-0 pt-0">
        <Button
          variant={instock ? 'primary' : 'secondary'}
          className="w-100"
          disabled={!instock}
          onClick={handleAddToCart}
        >
          {instock ? 'Thêm vào giỏ' : 'Không khả dụng'}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default MyProduct;
