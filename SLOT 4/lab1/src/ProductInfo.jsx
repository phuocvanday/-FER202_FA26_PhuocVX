import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

function ProductInfo({ name, price, tag, avatar }) {
  return (
    <Card style={{ width: '18rem', margin: '1rem', position: 'relative' }}>
      <Badge
        bg="primary"
        pill
        style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}
      >
        {tag}
      </Badge>
      <Card.Img variant="top" src={avatar} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: {price.toLocaleString('vi-VN')} đ</Card.Text>
        <Button variant="primary">Mua ngay</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductInfo
