import { useState } from 'react';
import postApi from '../api/postApi';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Event handler cũng có thể là hàm async
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setResult(null);
    try {
      const response = await postApi.create({
        title: title,
        body: body,
        userId: 1,
      });
      setResult({ status: response.status, data: response.data });
      setTitle('');
      setBody('');
    } catch (err) {
      setError(err.userMessage ?? err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section>
      <h2 className="h4 mb-1">POST – Tạo bài viết</h2>
      <p className="text-muted">
        Request: <code>POST /posts</code> với body <code>{'{ title, body, userId }'}</code>
      </p>

      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group className="mb-3" controlId="create-title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="create-body">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Đang gửi...' : 'Tạo bài viết'}
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

export default CreatePost;
