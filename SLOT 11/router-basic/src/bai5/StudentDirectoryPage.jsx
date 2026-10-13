import { useSearchParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { STUDENTS } from './students';

const StudentDirectoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q') ?? '';
  const classFilter = searchParams.get('class') ?? '';

  return (
    <>
      <h1 className="mb-3">Danh bạ sinh viên</h1>
      <p className="text-muted">
        Từ khóa: <code>{q || '(trống)'}</code> · Lớp:{' '}
        <code>{classFilter || 'Tất cả lớp'}</code>
      </p>
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
