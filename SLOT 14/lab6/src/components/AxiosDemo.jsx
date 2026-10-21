import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const AxiosDemo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const requestUsers = useCallback(
    () =>
      axios
        .get(API_URL)
        .then((response) => setUsers(response.data))
        .catch((err) => setError(err.message || 'Không tải được dữ liệu'))
        .finally(() => setLoading(false)),
    [],
  );

  const fetchUsers = () => {
    setLoading(true);
    setError('');
    requestUsers();
  };

  useEffect(() => {
    requestUsers();
  }, [requestUsers]);

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
        <Button variant="outline-danger" size="sm" onClick={fetchUsers}>
          Thử lại
        </Button>
      </Alert>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="text-muted mb-0">
          Tải <strong>{users.length}</strong> users từ <code>jsonplaceholder.typicode.com/users</code>
        </p>
        <Button variant="outline-primary" size="sm" onClick={fetchUsers}>
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
