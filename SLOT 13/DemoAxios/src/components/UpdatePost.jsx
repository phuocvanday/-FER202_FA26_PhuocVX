import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

const UpdatePost = () => {
  const [post, setPost] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

  const requestPost = useCallback(
    () =>
      axios
        .get(API_URL)
        .then((response) => setPost(response.data))
        .catch((err) => setError(err.message)),
    [],
  );

  useEffect(() => {
    requestPost();
  }, [requestPost]);

  // PUT = thay thế toàn bộ tài nguyên → phải gửi đủ các trường
  const handleUpdate = () => {
    setUpdating(true);
    setError(null);
    setResult(null);

    axios
      .put(API_URL, {
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
      })
      .then((response) => setResult({ status: response.status, data: response.data }))
      .catch((err) => setError(err.message))
      .finally(() => setUpdating(false));
  };

  return (
    <section>
      <h2 className="h4 mb-1">PUT – Cập nhật bài viết</h2>
      <p className="text-muted">
        Request: <code>PUT /posts/1</code> với body đầy đủ{' '}
        <code>{'{ id, userId, title, body }'}</code>
      </p>

      {!post && !error && (
        <div className="d-flex align-items-center gap-2">
          <Spinner animation="border" size="sm" />
          <span>Loading...</span>
        </div>
      )}

      {error && !post && <Alert variant="danger">Error: {error}</Alert>}

      {post && (
        <>
          <Form className="mb-3">
            <Form.Group className="mb-3" controlId="update-title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="update-body">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
              />
            </Form.Group>
            <Button onClick={handleUpdate} disabled={updating}>
              {updating ? 'Đang cập nhật...' : 'Cập nhật (PUT)'}
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
        </>
      )}
    </section>
  );
};

export default UpdatePost;
