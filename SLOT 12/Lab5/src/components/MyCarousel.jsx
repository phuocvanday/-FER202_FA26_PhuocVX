import Carousel from 'react-bootstrap/Carousel';
import { banners } from '../data/banners';

const MyCarousel = () => (
  <Carousel interval={3000} className="mb-4">
    {banners.map((b) => (
      <Carousel.Item key={b.id}>
        <img
          className="d-block w-100"
          src={b.image}
          alt={b.title}
          style={{ height: 400, objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>{b.title}</h3>
          <p>{b.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default MyCarousel;
