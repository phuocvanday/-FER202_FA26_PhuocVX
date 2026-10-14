import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar';
import MyCarousel from './components/MyCarousel';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import New from './pages/New';
import Contact from './pages/Contact';

const App = () => (
  <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <Container as="main" className="my-4 flex-grow-1">
      <MyCarousel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<New />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Container>
    <Footer />
  </div>
);

export default App;
