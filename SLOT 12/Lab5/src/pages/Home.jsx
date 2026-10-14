import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyProduct from '../components/MyProduct';
import { products } from '../data/products';

const Home = () => (
  <>
    <h1 className="mb-3">Home</h1>
    <Row xs={1} sm={2} lg={3} className="g-4">
      {products.map((p) => (
        <Col key={p.id}>
          <MyProduct product={p} />
        </Col>
      ))}
    </Row>
  </>
);

export default Home;
