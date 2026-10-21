import { useEffect, useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import { userApi } from '../api/postApi';

const AxiosDemo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await userApi.getAll();
      
      setUsers(response.data);
      setError('');
    } catch (err) {
      setError(err.userMessage ?? err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReload = () => {
    setLoading(true);
    setError('');
    fetchUsers();
  };

  useEffect(() => {
    const loadUsers = async () => {
      await fetchUsers();
    };
    loadUsers();
  }, []);

  if (loading) {
    return (
      <div className="d-flex align-items-center gap-2">
        <Spinner animation="border" size="sm" />
        <span>Đang tải dữ liệu...</span>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="d-flex justify-content-between align-items-center">
        <span>Lỗi: {error}</span>
        <Button variant="outline-danger" size="sm" onClick={handleReload}>
          Thử lại
        </Button>
      </Alert>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="text-muted mb-0">
          Tải <strong>{users.length}</strong> users từ <code>GET /users</code> (qua userApi)
        </p>
        <Button variant="outline-primary" size="sm" onClick={handleReload}>
          Tải lại
        </Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Họ tên</th>
            <th>Username</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Website</th>
            <th>Công ty</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>
                <Badge bg="secondary">{u.username}</Badge>
              </td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.website}</td>
              <td>{u.company?.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AxiosDemo;
