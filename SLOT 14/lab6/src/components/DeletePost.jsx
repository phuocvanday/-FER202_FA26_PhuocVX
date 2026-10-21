import { useEffect, useState } from 'react';
import postApi from '../api/postApi';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';

const DeletePost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await postApi.getAll({ _limit: 5 });
        setPosts(response.data);
      } catch (err) {
        setError(err.userMessage ?? err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm(`Xóa bài viết #${id}?`)) return;

    setDeletingId(id);
    setError(null);
    setMessage('');
    try {
      const response = await postApi.remove(id);
      // JSONPlaceholder không xóa thật → tự cập nhật state bằng filter
      setPosts((prev) => prev.filter((p) => p.id !== id));
      setMessage(`Đã xóa bài #${id} – Status: ${response.status}`);
    } catch (err) {
      setError(err.userMessage ?? err.message);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <section>
      <h2 className="h4 mb-1">DELETE – Xóa bài viết</h2>
      <p className="text-muted">
        Request: <code>DELETE /posts/:id</code> – id nằm trên URL, không có body.
      </p>

      {loading && (
        <div className="d-flex align-items-center gap-2">
          <Spinner animation="border" size="sm" />
          <span>Loading...</span>
        </div>
      )}

      {error && <Alert variant="danger">Error: {error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}

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
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(post.id)}
                disabled={deletingId === post.id}
              >
                {deletingId === post.id ? 'Đang xóa...' : 'Xóa'}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </section>
  );
};

export default DeletePost;
