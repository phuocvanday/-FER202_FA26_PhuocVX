import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

const CITIES = ['Hà Nội', 'Đà Nẵng', 'TP.HCM', 'Cần Thơ'];

const initialStudents = [
  { id: 1, name: 'Nguyễn Văn An', score: 8.5, contact: { city: 'Hà Nội' } },
  { id: 2, name: 'Trần Thị Bình', score: 4.5, contact: { city: 'Đà Nẵng' } },
  { id: 3, name: 'Lê Minh Châu', score: 6, contact: { city: 'TP.HCM' } },
];

const StudentManager = () => {
  const [students, setStudents] = useState(initialStudents);
  const [newName, setNewName] = useState('');
  const [sortBy, setSortBy] = useState('none');

  const canAdd = newName.trim().length >= 3;

  const addStudent = (e) => {
    e.preventDefault();
    if (!canAdd) return;
    const name = newName.trim();
    setStudents((prev) => [...prev, { id: Date.now(), name, score: 0, contact: { city: CITIES[0] } }]);
    setNewName('');
  };

  const updateScore = (id, text) => {
    const score = Math.min(10, Math.max(0, Number(text)));
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, score } : s)));
  };

  const updateCity = (id, city) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, contact: { ...s.contact, city } } : s)),
    );
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const bonusAll = () => {
    setStudents((prev) => prev.map((s) => ({ ...s, score: Math.min(10, s.score + 0.5) })));
  };

  const sorted =
    sortBy === 'none'
      ? students
      : [...students].sort((a, b) =>
          sortBy === 'name' ? a.name.localeCompare(b.name, 'vi') : b.score - a.score,
        );

  const average =
    students.length === 0
      ? '0.00'
      : (students.reduce((sum, s) => sum + s.score, 0) / students.length).toFixed(2);
  const passed = students.filter((s) => s.score >= 5).length;

  return (
    <Card>
      <Card.Body>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <Form onSubmit={addStudent} className="flex-grow-1">
            <InputGroup>
              <Form.Control
                placeholder="Tên sinh viên (ít nhất 3 ký tự)"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <Button type="submit" disabled={!canAdd}>
                Thêm
              </Button>
            </InputGroup>
          </Form>

          <Form.Select
            style={{ width: 'auto' }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="none">Thứ tự nhập</option>
            <option value="name">Theo tên A → Z</option>
            <option value="score">Điểm cao → thấp</option>
          </Form.Select>

          <Button variant="outline-success" onClick={bonusAll}>
            +0.5 cả lớp
          </Button>
        </div>

        <Table bordered hover responsive className="align-middle">
          <thead className="table-light">
            <tr>
              <th>Họ tên</th>
              <th style={{ width: 110 }}>Điểm</th>
              <th style={{ width: 150 }}>Thành phố</th>
              <th>Kết quả</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {sorted.map(({ id, name, score, contact }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>
                  <Form.Control
                    type="number"
                    size="sm"
                    min={0}
                    max={10}
                    step={0.5}
                    value={score}
                    onChange={(e) => updateScore(id, e.target.value)}
                  />
                </td>
                <td>
                  <Form.Select
                    size="sm"
                    value={contact.city}
                    onChange={(e) => updateCity(id, e.target.value)}
                  >
                    {CITIES.map((city) => (
                      <option key={city}>{city}</option>
                    ))}
                  </Form.Select>
                </td>
                <td>
                  <Badge bg={score >= 5 ? 'success' : 'secondary'}>
                    {score >= 5 ? 'Đạt' : 'Chưa đạt'}
                  </Badge>
                </td>
                <td>
                  <Button variant="outline-danger" size="sm" onClick={() => removeStudent(id)}>
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <p className="mb-0 fw-semibold">
          Sĩ số: {students.length} · Điểm trung bình: {average} · Đạt: {passed}/{students.length}
        </p>
      </Card.Body>
    </Card>
  );
};

export default StudentManager;
