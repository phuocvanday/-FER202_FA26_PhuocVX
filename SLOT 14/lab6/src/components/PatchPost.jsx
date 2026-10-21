import { useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

const PatchPost = () => {
  const [title, setTitle] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  // PATCH = sửa một phần → chỉ gửi trường thay đổi
  const handlePatch = async () => {
    setSaving(true);
    setError(null);
    setResult(null);
    try {
      const response = await axios.patch(API_URL, { title }); // chỉ gửi 1 trường
      setResult({ status: response.status, data: response.data });
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section>
      <h2 className="h4 mb-1">PATCH – Sửa tiêu đề bài viết #1</h2>
      <p className="text-muted">
        Request: <code>PATCH /posts/1</code> với body chỉ gồm <code>{'{ title }'}</code> –
        server tự gộp với dữ liệu cũ.
      </p>

      <Form className="mb-3">
        <Form.Group className="mb-3" controlId="patch-title">
          <Form.Label>Tiêu đề mới</Form.Label>
          <Form.Control
            placeholder="Tiêu đề mới"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handlePatch} disabled={!title.trim() || saving}>
          {saving ? 'Đang lưu...' : 'Cập nhật (PATCH)'}
        </Button>
      </Form>

      {error && <Alert variant="danger">Error: {error}</Alert>}

      {result && (
        <Card>
          <Card.Header>
            Status: <strong>{result.status}</strong>
          </Card.Header>
          <Card.Body>
            <pre className="mb-0">{JSON.stringify(result.data, null, 2)}</pre>
          </Card.Body>
        </Card>
      )}
    </section>
  );
};

export default PatchPost;
