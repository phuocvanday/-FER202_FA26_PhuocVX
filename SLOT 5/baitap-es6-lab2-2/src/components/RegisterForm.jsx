import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputField from './InputField';
import AppButton from './AppButton';
import { fields, genders, majors } from '../data/registerConfig';

const RegisterForm = () => (
  <Row className="justify-content-center">
    <Col md={6}>
      <Card>
        <Card.Body>
          <Card.Title className="mb-3">Đăng ký</Card.Title>
          <Form onSubmit={(event) => event.preventDefault()}>
            {fields.map((field) => (
              <InputField key={field.id} {...field} />
            ))}

            <Form.Group className="mb-3">
              <Form.Label>Giới tính</Form.Label>
              <div>
                {genders.map((gender) => (
                  <Form.Check
                    inline
                    key={gender}
                    type="radio"
                    name="gender"
                    id={`gender-${gender}`}
                    label={gender}
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="major">
              <Form.Label>Chuyên ngành</Form.Label>
              <Form.Select defaultValue="">
                <option value="">-- Chọn chuyên ngành --</option>
                {majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Check
              className="mb-3"
              type="checkbox"
              id="agreeTerms"
              label="Tôi đồng ý điều khoản"
            />

            <AppButton type="submit" className="w-100">
              Đăng ký
            </AppButton>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default RegisterForm;
