import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import postApi from '../../api/postApi';
import ResultBox from './ResultBox';

export default function CreatePostCard() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (title.trim().length < 5) errs.title = 'Tiêu đề tối thiểu 5 ký tự';
    if (body.trim().length < 10) errs.body = 'Nội dung tối thiểu 10 ký tự';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    setError(null);
    try {
      const res = await postApi.create({
        title: title.trim(),
        body: body.trim(),
        userId: 1,
      });
      setResult({ status: res.status, duration: res.duration, data: res.data });
      setTitle('');
      setBody('');
    } catch (err) {
      setError(err.userMessage ?? err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Header>
        <strong>2.2 · POST</strong> /posts
      </Card.Header>
      <Card.Body>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Control
            className="mb-2"
            placeholder="Title"
            value={title}
            isInvalid={!!errors.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Control.Feedback type="invalid" className="mb-2">
            {errors.title}
          </Form.Control.Feedback>
          <Form.Control
            as="textarea"
            rows={2}
            className="mb-2"
            placeholder="Body"
            value={body}
            isInvalid={!!errors.body}
            onChange={(e) => setBody(e.target.value)}
          />
          <Form.Control.Feedback type="invalid" className="mb-2">
            {errors.body}
          </Form.Control.Feedback>
          <Button type="submit" disabled={submitting}>
            {submitting ? (
              <>
                <Spinner size="sm" className="me-1" /> Đang gửi...
              </>
            ) : (
              'Tạo bài viết'
            )}
          </Button>
        </Form>
        {error && (
          <Alert variant="danger" className="mt-3 mb-0">
            {error}
          </Alert>
        )}
        <ResultBox result={result} />
      </Card.Body>
    </Card>
  );
}
