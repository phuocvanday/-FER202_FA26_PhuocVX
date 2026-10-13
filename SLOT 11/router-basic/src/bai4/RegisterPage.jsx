import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const SESSIONS = ['Sáng', 'Chiều'];

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', session: 'Sáng' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...form, name: form.name.trim(), email: form.email.trim() };

    if (!data.name) {
      setError('Vui lòng nhập họ tên');
      return;
    }
    if (!data.email.includes('@')) {
      setError('Email không hợp lệ (phải có ký tự @)');
      return;
    }

    navigate('/success', { state: data, replace: true });
  };

  return (
    <Card className="mx-auto" style={{ maxWidth: 560 }}>
      <Card.Body>
        <Card.Title as="h1" className="h3 mb-3">Đăng ký tham dự</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control name="name" value={form.name} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="d-block">Buổi tham dự</Form.Label>
            {SESSIONS.map((s) => (
              <Form.Check
                inline
                key={s}
                type="radio"
                id={`session-${s}`}
                name="session"
                value={s}
                label={s}
                checked={form.session === s}
                onChange={handleChange}
              />
            ))}
          </Form.Group>

          <div className="d-flex gap-2">
            <Button type="button" variant="outline-secondary" onClick={() => navigate(-1)}>
              Quay lại
            </Button>
            <Button type="submit">Gửi đăng ký</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RegisterPage;
