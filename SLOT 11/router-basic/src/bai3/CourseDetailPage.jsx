import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import { findCourse } from './courses';

const CourseDetailPage = () => {
  const { code } = useParams();
  const course = findCourse(code);

  if (!course) {
    return (
      <Alert variant="danger">
        {`Không tìm thấy môn học có mã ${code}. `}
        <Alert.Link as={Link} to="/courses">
          Quay lại danh sách
        </Alert.Link>
      </Alert>
    );
  }

  return (
    <>
      <Card style={{ maxWidth: 640 }} className="mb-3">
        <Card.Header className="d-flex gap-2 align-items-center">
          <Badge bg="primary">{course.code}</Badge>
          <Badge bg="secondary">{`Kỳ ${course.semester}`}</Badge>
          <Badge bg="info">{`${course.credits} tín chỉ`}</Badge>
        </Card.Header>
        <Card.Body>
          <Card.Title as="h1" className="h4">{course.name}</Card.Title>
          <Card.Text>{course.desc}</Card.Text>
        </Card.Body>
      </Card>
      <Link to="/courses">← Quay lại danh sách</Link>
    </>
  );
};

export default CourseDetailPage;
