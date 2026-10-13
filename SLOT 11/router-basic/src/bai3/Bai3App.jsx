import { Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import CourseListPage from './CourseListPage';
import CourseDetailPage from './CourseDetailPage';

const Bai3App = () => (
  <Container className="my-4">
    <Routes>
      <Route path="/" element={<Navigate to="/courses" replace />} />
      <Route path="/courses" element={<CourseListPage />} />
      <Route path="/courses/:code" element={<CourseDetailPage />} />
    </Routes>
  </Container>
);

export default Bai3App;
