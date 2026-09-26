import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuCard from './MenuCard';
import { menuItems } from '../data/pizzaData';

const MenuSection = () => (
  <section id="about" className="py-5">
    <Container>
      <h2 className="section-title mb-3">Our Menu</h2>
      <Row xs={1} sm={2} lg={4} className="g-4">
        {menuItems.map((item) => (
          <Col key={item.id}>
            <MenuCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default MenuSection;
