import { useSearchParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CLASSES, STUDENTS } from './students';

const StudentDirectoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q') ?? '';
  const classFilter = searchParams.get('class') ?? '';

  const updateParam = (key, value, replace = false) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value) {
          next.set(key, value);
        } else {
          next.delete(key);
        }
        return next;
      },
      { replace },
    );
  };

  return (
    <>
      <h1 className="mb-3">Danh bạ sinh viên</h1>
      <Row className="g-2 mb-3">
        <Col md={8}>
          <Form.Control
            type="search"
            placeholder="Tìm theo tên hoặc MSSV..."
            aria-label="Tìm theo tên hoặc MSSV"
            value={q}
            onChange={(e) => updateParam('q', e.target.value, true)}
          />
        </Col>
        <Col md={4}>
          <Form.Select
            aria-label="Chọn lớp"
            value={classFilter}
            onChange={(e) => updateParam('class', e.target.value)}
          >
            <option value="">Tất cả lớp</option>
            {CLASSES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>MSSV</th>
            <th>Họ tên</th>
            <th>Lớp</th>
            <th>GPA</th>
          </tr>
        </thead>
        <tbody>
          {STUDENTS.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.className}</td>
              <td>{s.gpa.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default StudentDirectoryPage;
