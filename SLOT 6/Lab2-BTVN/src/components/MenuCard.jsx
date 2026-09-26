import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const formatUSD = (n) => `$${n.toFixed(2)}`;

const MenuCard = ({ item }) => {
  const { name, image, price, salePrice, tag } = item;

  return (
    <Card className="menu-card h-100 border-0">
      {tag && <span className="menu-tag">{tag}</span>}
      <Card.Img variant="top" src={image} alt={name} className="menu-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="menu-name">{name}</Card.Title>
        <Card.Text className="small">
          {salePrice ? (
            <>
              <del className="text-muted">{formatUSD(price)}</del>
              <span className="sale-price ms-1">{formatUSD(salePrice)}</span>
            </>
          ) : (
            formatUSD(price)
          )}
        </Card.Text>
        <Button variant="dark" size="sm" className="mt-auto w-100">
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
