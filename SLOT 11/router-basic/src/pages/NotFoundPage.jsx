import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="py-5 text-center">
    <h1 className="display-1 fw-bold text-secondary">404</h1>
    <p className="lead mb-4">Không tìm thấy trang bạn yêu cầu.</p>
    <Link to="/">Về trang chủ</Link>
  </div>
);

export default NotFoundPage;
