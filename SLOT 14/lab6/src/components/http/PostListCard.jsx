import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import useAxios from '../../hooks/useAxios';
import AsyncContent from '../common/AsyncContent';
import postApi from '../../api/postApi';

export default function PostListCard() {
  const { data, loading, error, refetch } = useAxios(
    (signal) => postApi.getAll({ userId: 1, _limit: 5 }, signal),
    [],
    { initialData: [] }
  );

  return (
    <Card className="h-100 shadow-sm">
      <Card.Header>
        <strong>2.1 · GET</strong> /posts?userId=1&amp;_limit=5
      </Card.Header>
      <Card.Body>
        <AsyncContent
          loading={loading}
          error={error}
          data={data}
          onRetry={refetch}
          emptyText="Không có bài viết"
        >
          {(posts) => (
            <ListGroup variant="flush">
              {posts.map((p) => (
                <ListGroup.Item key={p.id}>
                  #{p.id} – {p.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </AsyncContent>
      </Card.Body>
    </Card>
  );
}
