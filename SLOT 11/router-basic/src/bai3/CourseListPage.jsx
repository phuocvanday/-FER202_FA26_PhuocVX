import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { courses } from './courses';

const CourseListPage = () => (
  <>
    <h1 className="h3 mb-3">Danh sách môn học</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mã môn</th>
          <th>Tên môn</th>
          <th>Số tín chỉ</th>
          <th>Kỳ</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((c) => (
          <tr key={c.code}>
            <td>
              <Link to={`/courses/${c.code}`}>{c.code}</Link>
            </td>
            <td>{c.name}</td>
            <td>{c.credits}</td>
            <td>{c.semester}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
);

export default CourseListPage;
