import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductInfo from './ProductInfo'

function ProductList({ products }) {
  return (
    <Container>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} lg={4}>
            <ProductInfo
              name={product.name}
              price={product.price}
              tag={product.tag}
              avatar={product.avatar}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductList
