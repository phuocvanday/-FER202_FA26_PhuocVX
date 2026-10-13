import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import StudentDirectoryPage from './StudentDirectoryPage';

const Bai5App = () => (
  <Container className="my-4">
    <Routes>
      <Route path="/" element={<StudentDirectoryPage />} />
    </Routes>
  </Container>
);

export default Bai5App;
