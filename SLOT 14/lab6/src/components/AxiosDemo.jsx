import { useEffect, useState } from 'react';
import axios from 'axios';
import postApi from '../api/postApi';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const AxiosDemo = () => {
  const [postId, setPostId] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Mỗi lần effect chạy (postId đổi) tạo một controller MỚI
    const controller = new AbortController();

    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        // 2. Truyền signal cho axios
        const res = await postApi.getById(postId, controller.signal);
        setData(res.data);
      } catch (err) {
        // 3. Request bị hủy → không phải lỗi, bỏ qua
        if (axios.isCancel(err)) return;
        setData(null);
        setError(err.userMessage ?? err.message);
      } finally {
        // Request đã bị hủy thì request mới đang chạy → không tắt loading
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchPost();

    // 4. Cleanup: chạy TRƯỚC lần effect kế tiếp và khi unmount → hủy request cũ
    return () => controller.abort();
  }, [postId]);

  return (
    <section>
      <h2 className="h4 mb-1">Axios Demo – chọn Post ID (AbortController)</h2>
      <p className="text-muted">
        Đổi id → hủy request cũ bằng <code>AbortController</code>, chỉ hiện bài của id cuối.
      </p>

      <Form className="d-flex flex-wrap align-items-end gap-2 mb-3">
        <Form.Group controlId="post-id">
          <Form.Label className="mb-1">Post ID (1–100)</Form.Label>
          <Form.Control
            type="number"
            min={1}
            max={100}
            value={postId}
            onChange={(e) => setPostId(Number(e.target.value) || 1)}
            style={{ width: 120 }}
          />
        </Form.Group>
        <Button
          variant="outline-secondary"
          onClick={() => setPostId((id) => Math.max(1, id - 1))}
        >
          ‹ Trước
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => setPostId((id) => Math.min(100, id + 1))}
        >
          Sau ›
        </Button>
      </Form>

      {loading && (
        <div className="d-flex align-items-center gap-2">
          <Spinner animation="border" size="sm" />
          <span>Loading...</span>
        </div>
      )}

      {!loading && error && <Alert variant="danger">Error: {error}</Alert>}

      {!loading && data && (
        <Card>
          <Card.Body>
            <Card.Title as="h3" className="h5">
              #{data.id} – {data.title}
            </Card.Title>
            <Card.Text className="mb-0">{data.body}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </section>
  );
};

export default AxiosDemo;
