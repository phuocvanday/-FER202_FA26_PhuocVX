import pizza1 from '../assets/images/pizza1.jpg';
import pizza2 from '../assets/images/pizza2.jpg';
import pizza3 from '../assets/images/pizza3.jpg';
import pizza4 from '../assets/images/pizza4.jpg';
import pizza5 from '../assets/images/pizza5.jpg';
import menu1 from '../assets/images/menu1.jpg';
import menu2 from '../assets/images/menu2.jpg';
import menu3 from '../assets/images/menu3.jpg';
import menu4 from '../assets/images/menu4.jpg';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const slides = [
  {
    id: 1,
    image: pizza1,
    title: 'Neapolitan Pizza',
    text: 'If you are looking for a traditional Italian pizza, the Neapolitan is the best option!',
  },
  {
    id: 2,
    image: pizza2,
    title: 'Margherita Pizza',
    text: 'Fresh tomatoes, mozzarella and basil on a thin, crispy crust.',
  },
  {
    id: 3,
    image: pizza3,
    title: 'Pepperoni Pizza',
    text: 'A classic favourite loaded with spicy pepperoni and melted cheese.',
  },
  {
    id: 4,
    image: pizza4,
    title: 'Vegetarian Pizza',
    text: 'Colourful seasonal vegetables baked in our wood-fired oven.',
  },
  {
    id: 5,
    image: pizza5,
    title: 'Seafood Pizza',
    text: 'Shrimp, squid and mussels with a touch of garlic and lemon.',
  },
];

export const menuItems = [
  { id: 1, name: 'Margherita Pizza', image: menu1, price: 40, salePrice: 24, tag: 'SALE' },
  { id: 2, name: 'Mushroom Pizza', image: menu2, price: 25 },
  { id: 3, name: 'Hawaiian Pizza', image: menu3, price: 30, tag: 'NEW' },
  { id: 4, name: 'Pesto Pizza', image: menu4, price: 50, salePrice: 30, tag: 'SALE' },
];

export const services = ['Dine in', 'Take away', 'Delivery', 'Birthday party'];
