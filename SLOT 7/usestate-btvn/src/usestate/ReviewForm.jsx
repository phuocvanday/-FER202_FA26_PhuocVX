import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import StarRating from './StarRating';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const canSubmit = rating > 0 && comment.trim().length >= 5;
  const average =
    reviews.length === 0
      ? '0.0'
      : (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setReviews((prev) => [{ id: Date.now(), rating, comment: comment.trim() }, ...prev]);
    setRating(0);
    setComment('');
  };

  return (
    <Card>
      <Card.Header className="fw-semibold">
        Trung bình {average}/5 ({reviews.length} lượt)
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Chọn số sao</Form.Label>
            <StarRating value={rating} onChange={setRating} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="review-comment">
            <Form.Label>Nhận xét</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Nhập ít nhất 5 ký tự..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" disabled={!canSubmit}>
            Gửi đánh giá
          </Button>
        </Form>
      </Card.Body>

      {reviews.length > 0 && (
        <ListGroup variant="flush">
          {reviews.map((r) => (
            <ListGroup.Item key={r.id}>
              <span style={{ color: '#ffc107' }}>{'★'.repeat(r.rating)}</span>
              <span style={{ color: '#ced4da' }}>{'★'.repeat(5 - r.rating)}</span>
              <span className="ms-2">{r.comment}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Card>
  );
};

export default ReviewForm;
