import { useSearchParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { STUDENTS } from './students';

const StudentDirectoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h1 className="mb-3">Danh bạ sinh viên</h1>
      <p className="text-muted">
        Query string hiện tại: <code>?{searchParams.toString()}</code>
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
