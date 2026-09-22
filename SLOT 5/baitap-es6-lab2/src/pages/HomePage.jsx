// ES6: import/export
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import { ProductList, AppButton, InputField } from '../components';
import { products } from '../data/products';
import { APP_NAME } from '../data/menu';

// ES6: arrow function
const formatVND = (n) =>
  n.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

// ES6: arrow function + default params (title mặc định nếu cần mở rộng)
const HomePage = ({ subtitle = 'Cửa hàng mini' }) => {
  // ES6: const/let
  const onSale = products.filter((p) => p.discount > 0); // ES6: filter
  // ES6: spread + sort
  const deals = [...onSale]
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 4);
  // ES6: spread + Set + map + ?. + ??
  const categories = [
    ...new Set(products.map((p) => p.category?.name ?? 'Khác')),
  ];

  // ES6: object shorthand
  const total = products.length;
  const inStockCount = products.filter((p) => p.inStock).length;
  const avgPrice = Math.round(
    products.reduce((sum, p) => sum + p.price, 0) / products.length, // ES6: reduce
  );
  const stats = { total, inStockCount, avgPrice };
  // ES6: destructuring
  const { total: totalProducts, inStockCount: stockCount, avgPrice: average } =
    stats;

  // ES6: object shorthand trong mảng cấu hình
  const statCards = [
    { label: 'Tổng SP', value: totalProducts },
    { label: 'Còn hàng', value: stockCount },
    { label: 'Giá TB', value: formatVND(average) },
  ];

  return (
    <div>
      {/* 1. Hero */}
      <Card bg="primary" text="white" className="mb-4">
        <Card.Body>
          {/* ES6: template literals */}
          <Card.Title as="h3">{`Chào mừng đến ${APP_NAME}`}</Card.Title>
          <Card.Text>
            {`Hôm nay có ${onSale.length} sản phẩm đang giảm giá`}
          </Card.Text>
          {/* ES6: && — chỉ hiện phụ đề khi có subtitle */}
          {subtitle && <Card.Text className="mb-0 opacity-75">{subtitle}</Card.Text>}
        </Card.Body>
      </Card>

      {/* 2. Thống kê */}
      <Row className="g-3 mb-4">
        {statCards.map(({ label, value }) => (
          // ES6: map + destructuring
          <Col md={4} key={label}>
            <Card className="text-center h-100">
              <Card.Body>
                <Card.Subtitle className="text-muted mb-1">{label}</Card.Subtitle>
                <Card.Title className="mb-0">{value}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 3. Bộ lọc (UI tĩnh) */}
      <InputGroup className="mb-4">
        <Form.Control placeholder="Tìm sản phẩm..." />
        <Form.Select style={{ maxWidth: 200 }}>
          <option value="">Tất cả danh mục</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
        {/* ES6: rest/spread — AppButton nhận prop qua ...rest */}
        <AppButton>Tìm</AppButton>
      </InputGroup>

      {/* 4. Đang giảm giá */}
      <section className="mb-5" id="deals">
        <h4 className="mb-3">Đang giảm giá</h4>
        <ProductList products={deals} />
      </section>

      {/* 5. Tất cả sản phẩm */}
      <section className="mb-5" id="products">
        <h4 className="mb-3">Tất cả sản phẩm</h4>
        {/* ES6: toán tử 3 ngôi */}
        {products.length === 0 ? (
          <Alert variant="info">Chưa có sản phẩm</Alert>
        ) : (
          <ProductList products={products} />
        )}
      </section>

      {/* 6. Nhận tin */}
      <Card className="mb-4" id="newsletter">
        <Card.Body>
          <Card.Title>Nhận tin khuyến mãi</Card.Title>
          <Form onSubmit={(e) => e.preventDefault()}>
            {/* ES6: rest props — type/required đi xuống Form.Control */}
            <InputField
              id="newsletterEmail"
              label="Email"
              type="email"
              placeholder="name@example.com"
              required
            />
            <AppButton type="submit">Đăng ký</AppButton>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;
