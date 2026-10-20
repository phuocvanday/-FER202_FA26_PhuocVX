import Container from 'react-bootstrap/Container';
import AxiosDemo from './components/AxiosDemo';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

const App = () => (
  <Container className="my-4">
    <h1 className="mb-4">DemoAxios</h1>
    <AxiosDemo />
    <hr className="my-5" />
    <PostList />
    <hr className="my-5" />
    <CreatePost />
  </Container>
);

export default App;
