import { useEffect, useState } from 'react';
import postApi, { userApi } from '../api/postApi';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';

// NC3.2 – Đo thời gian: tuần tự (3 await nối tiếp) và song song (1 await + Promise.all)
const measure = async (id) => {
  let t0 = performance.now();
  const { data: p1 } = await postApi.getById(id);
  await userApi.getById(p1.userId);
  await postApi.getComments(id);
  const sequential = Math.round(performance.now() - t0);

  t0 = performance.now();
  const { data: p2 } = await postApi.getById(id);
  await Promise.all([userApi.getById(p2.userId), postApi.getComments(id)]);
  const parallel = Math.round(performance.now() - t0);

  return { sequential, parallel };
};

// Phiên bản 2 – Promise.allSettled: bình luận lỗi vẫn hiện bài viết + tác giả
const PostDetail = ({ postId = 1 }) => {
  const [detail, setDetail] = useState(null); // { post, author, comments, warning }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timing, setTiming] = useState(null);
  const [measuring, setMeasuring] = useState(false);

  useEffect(() => {
    const loadDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        // Bước 1 – bắt buộc: lỗi ở đây là lỗi cả trang
        const { data: post } = await postApi.getById(postId);

        // Bước 2 – phần phụ: allSettled KHÔNG ném lỗi, trả kết quả từng request
        const [userResult, commentsResult] = await Promise.allSettled([
          userApi.getById(post.userId),
          postApi.getComments(postId),
        ]);

        setDetail({
          post,
          author: userResult.status === 'fulfilled' ? userResult.value.data : null,
          comments:
            commentsResult.status === 'fulfilled' ? commentsResult.value.data : [],
          warning: [userResult, commentsResult].some((r) => r.status === 'rejected')
            ? 'Một số thông tin phụ (tác giả / bình luận) không tải được.'
            : null,
        });
      } catch (err) {
        setError(err.userMessage ?? err.message);
      } finally {
        setLoading(false);
      }
    };
    loadDetail();
  }, [postId]);

  const handleMeasure = async () => {
    setMeasuring(true);
    setError(null);
    try {
      setTiming(await measure(postId));
    } catch (err) {
      setError(err.userMessage ?? err.message);
    } finally {
      setMeasuring(false);
    }
  };

  return (
    <section>
      <h2 className="h4 mb-1">NC3 – Chi tiết bài viết (Promise.allSettled)</h2>
      <p className="text-muted">
        Bước 1 tuần tự: <code>GET /posts/{postId}</code>. Bước 2 song song: tác giả + bình
        luận bằng <code>Promise.allSettled</code>.
      </p>

      {loading && (
        <div className="d-flex align-items-center gap-2">
          <Spinner animation="border" size="sm" />
          <span>Loading...</span>
        </div>
      )}

      {!loading && error && <Alert variant="danger">Error: {error}</Alert>}

      {!loading && !error && detail && (
        <>
          {detail.warning && <Alert variant="warning">⚠ {detail.warning}</Alert>}

          <Card className="mb-3">
            <Card.Body>
              <Card.Title as="h3" className="h5">
                {detail.post.title}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Tác giả:{' '}
                <strong>{detail.author?.name ?? `User ${detail.post.userId}`}</strong>
                {detail.author && ` (${detail.author.email})`}
              </Card.Subtitle>
              <Card.Text>{detail.post.body}</Card.Text>
            </Card.Body>
          </Card>

          <div className="d-flex align-items-center gap-3 mb-3">
            <Button onClick={handleMeasure} disabled={measuring}>
              {measuring ? 'Đang đo...' : 'Đo thời gian'}
            </Button>
            {timing && (
              <span className="text-muted">
                Tuần tự: <strong>{timing.sequential} ms</strong> | Song song:{' '}
                <strong>{timing.parallel} ms</strong>
              </span>
            )}
          </div>

          <h3 className="h5">Bình luận ({detail.comments.length})</h3>
          {detail.comments.length === 0 ? (
            <p className="text-muted mb-0">Không có bình luận.</p>
          ) : (
            <ListGroup>
              {detail.comments.map((c) => (
                <ListGroup.Item key={c.id}>
                  <strong>{c.name}</strong>: {c.body}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </>
      )}
    </section>
  );
};

export default PostDetail;
