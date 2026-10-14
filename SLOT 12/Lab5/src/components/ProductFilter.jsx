import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import MyProduct from './MyProduct';

const ALL = 'Tất cả';

const getCategoryName = (p) =>
  typeof p.category === 'string' ? p.category : (p.category?.name ?? 'Khác');

const getFinalPrice = (p) =>
  Math.round((p.price || 0) * (1 - (p.discount || 0) / 100));

const getRating = (p) =>
  typeof p.rating === 'number' ? p.rating : (p.rating?.rate ?? 0);

const sorters = {
  default: () => 0,
  'price-asc': (a, b) => getFinalPrice(a) - getFinalPrice(b),
  'price-desc': (a, b) => getFinalPrice(b) - getFinalPrice(a),
  rating: (a, b) => getRating(b) - getRating(a),
};

const ProductFilter = ({ products = [], onAddToCart }) => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState(ALL);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  const categories = [ALL, ...new Set(products.map(getCategoryName))];

  // Dữ liệu dẫn xuất: tính lại mỗi lần render, KHÔNG lưu vào state
  const visibleProducts = products
    .filter((p) => p.name.toLowerCase().includes(keyword.trim().toLowerCase()))
    .filter((p) => category === ALL || getCategoryName(p) === category)
    .filter((p) => !onlyInStock || Boolean(p.instock ?? p.inStock))
    .sort(sorters[sortBy]);

  const handleReset = () => {
    setKeyword('');
    setCategory(ALL);
    setOnlyInStock(false);
    setSortBy('default');
  };

  return (
    <>
      <Row className="g-2 align-items-center mb-3">
        <Col md={5}>
          <Form.Control
            placeholder="Tìm sản phẩm..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Mặc định</option>
            <option value="price-asc">Giá tăng dần</option>
            <option value="price-desc">Giá giảm dần</option>
            <option value="rating">Đánh giá cao</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Check
            type="switch"
            id="only-in-stock"
            label="Còn hàng"
            checked={onlyInStock}
            onChange={(e) => setOnlyInStock(e.target.checked)}
          />
        </Col>
        <Col md={2}>
          <Button variant="outline-secondary" className="w-100" onClick={handleReset}>
            Xóa lọc
          </Button>
        </Col>
      </Row>

      <ButtonGroup className="mb-3 flex-wrap">
        {categories.map((name) => (
          <Button
            key={name}
            size="sm"
            variant={name === category ? 'primary' : 'outline-primary'}
            onClick={() => setCategory(name)}
          >
            {name}
          </Button>
        ))}
      </ButtonGroup>

      <p className="text-muted">{`Tìm thấy ${visibleProducts.length}/${products.length} sản phẩm`}</p>

      {visibleProducts.length === 0 ? (
        <Alert variant="warning">Không có sản phẩm phù hợp</Alert>
      ) : (
        <Row xs={1} sm={2} lg={3} className="g-4">
          {visibleProducts.map((product) => (
            <Col key={product.id}>
              <MyProduct product={product} onAddToCart={onAddToCart} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default ProductFilter;
