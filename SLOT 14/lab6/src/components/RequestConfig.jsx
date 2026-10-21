import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

const RequestConfig = () => {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchInfo = async () => {
    try {
      const response = await axiosClient({
        method: 'get',
        url: '/posts', // URL tương đối, baseURL lấy từ instance
        params: { _page: 1, _limit: 3 },
        headers: { Accept: 'application/json', 'X-Client': 'FER202' },
        timeout: 5000, // ghi đè timeout 8000 của instance cho riêng request này
      });
      setInfo({
        status: response.status,
        duration: response.duration, // do response interceptor tính
        contentType: response.headers['content-type'],
        total: response.headers['x-total-count'],
        data: response.data,
      });
      setError(null);
    } catch (err) {
      setError(err.userMessage ?? err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReload = () => {
    setLoading(true);
    setError(null);
    setInfo(null);
    fetchInfo();
  };

  useEffect(() => {
    const loadInfo = async () => {
      await fetchInfo();
    };
    loadInfo();
  }, []);

  return (
    <section>
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h2 className="h4 mb-1">Cấu hình request</h2>
          <p className="text-muted mb-0">
            Cú pháp <code>axiosClient(config)</code> với <code>headers</code>,{' '}
            <code>params: {'{_page: 1, _limit: 3}'}</code> và <code>timeout: 5000</code>
          </p>
        </div>
        {!loading && (
          <Button variant="outline-primary" size="sm" onClick={handleReload}>
            Gửi lại
          </Button>
        )}
      </div>

      {loading && (
        <div className="d-flex align-items-center gap-2">
          <Spinner animation="border" size="sm" />
          <span>Loading...</span>
        </div>
      )}

      {!loading && error && <Alert variant="danger">Error: {error}</Alert>}

      {!loading && info && (
        <>
          <Table bordered className="mb-3">
            <tbody>
              <tr>
                <th style={{ width: 220 }}>Status</th>
                <td>{info.status}</td>
              </tr>
              <tr>
                <th>Thời gian xử lý</th>
                <td>{info.duration} ms</td>
              </tr>
              <tr>
                <th>Content-Type</th>
                <td>{info.contentType}</td>
              </tr>
              <tr>
                <th>Tổng số bài viết (x-total-count)</th>
                <td>{info.total}</td>
              </tr>
            </tbody>
          </Table>
          <ListGroup>
            {info.data.map((p) => (
              <ListGroup.Item key={p.id}>
                <strong>#{p.id}</strong> – {p.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </section>
  );
};

export default RequestConfig;
