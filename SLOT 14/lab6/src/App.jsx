import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AxiosDemo from './components/AxiosDemo';
import PostListCard from './components/http/PostListCard';
import CreatePostCard from './components/http/CreatePostCard';
import UpdatePostCard from './components/http/UpdatePostCard';
import PatchPostCard from './components/http/PatchPostCard';
import DeletePostCard from './components/http/DeletePostCard';
import RequestConfigCard from './components/http/RequestConfigCard';
import PostDetail from './components/PostDetail';

const App = () => (
  <Container className="py-4">
    <AxiosDemo />
    <h2 className="mt-5 mb-3">HTTP Requests với axios</h2>
    <Row xs={1} lg={2} className="g-4">
      <Col>
        <PostListCard />
      </Col>
      <Col>
        <CreatePostCard />
      </Col>
      <Col>
        <UpdatePostCard />
      </Col>
      <Col>
        <PatchPostCard />
      </Col>
      <Col>
        <DeletePostCard />
      </Col>
      <Col>
        <RequestConfigCard />
      </Col>
    </Row>
    <hr className="my-5" />
    <PostDetail postId={1} />
  </Container>
);

export default App;
