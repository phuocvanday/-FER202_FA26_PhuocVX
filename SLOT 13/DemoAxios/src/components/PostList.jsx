import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const requestPosts = useCallback(
    () =>
      axios
        .get(API_URL, {
          params: { userId: 1, _limit: 5 }, // → /posts?userId=1&_limit=5
        })
        .then((response) => setPosts(response.data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false)),
    [],
  );

  const fetchPosts = () => {
    setLoading(true);
    setError(null);
    requestPosts();
  };

  useEffect(() => {
    requestPosts();
  }, [requestPosts]);

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="h4 mb-1">GET – Danh sách bài viết của user 1</h2>
          <p className="text-muted mb-0">
            Request: <code>GET /posts?userId=1&amp;_limit=5</code> (truyền qua{' '}
            <code>params</code>)
          </p>
        </div>
        {!loading && !error && (
          <Button variant="outline-primary" size="sm" onClick={fetchPosts}>
            Tải lại
          </Button>
        )}
      </div>

      {loading && (
        <div className="d-flex align-items-center gap-2">
          <Spinner animation="border" size="sm" />
          <span>Loading...</span>
        </div>
      )}

      {!loading && error && (
        <Alert
          variant="danger"
          className="d-flex justify-content-between align-items-center"
        >
          <span>Error: {error}</span>
          <Button variant="outline-danger" size="sm" onClick={fetchPosts}>
            Thử lại
          </Button>
        </Alert>
      )}

      {!loading && !error && (
        <ListGroup>
          {posts.map((post) => (
            <ListGroup.Item
              key={post.id}
              className="d-flex justify-content-between align-items-center gap-3"
            >
              <span>
                <strong>#{post.id}</strong> – {post.title}
              </span>
              <Badge bg="secondary">userId: {post.userId}</Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </section>
  );
};

export default PostList;
