import Carousel from 'react-bootstrap/Carousel';
import { slides } from '../data/pizzaData';

const HeroCarousel = () => (
  <Carousel id="home" className="hero-carousel">
    {slides.map(({ id, image, title, text }) => (
      <Carousel.Item key={id}>
        <img className="d-block w-100 hero-img" src={image} alt={title} />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default HeroCarousel;
