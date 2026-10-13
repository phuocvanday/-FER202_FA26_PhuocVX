import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import EventPage from './EventPage';

const Bai4App = () => (
  <Container className="my-4">
    <Routes>
      <Route path="/" element={<EventPage />} />
    </Routes>
  </Container>
);

export default Bai4App;
