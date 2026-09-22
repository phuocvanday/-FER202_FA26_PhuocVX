import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const ProductCard = ({ product }) => {
  const {
    name = 'Sản phẩm chưa đặt tên',
    price,
    image,
    rating,
    category,
  } = product;

  const imageSrc = image ?? 'https://placehold.co/300x200?text=No+Image';
  const categoryName = category?.name ?? 'Chưa phân loại';
  const rate = rating?.rate ?? 'Chưa có';
  const count = rating?.count ?? 0;
  const priceLabel =
    price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) ??
    'Liên hệ';

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imageSrc} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Badge bg="secondary" className="mb-2">
          {categoryName}
        </Badge>
        <Card.Text>
          Giá: {priceLabel}
          <br />
          Đánh giá: {rate} ({count} lượt)
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
