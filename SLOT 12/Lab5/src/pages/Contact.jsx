import { useState, useReducer } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const initialState = {
  values: initialValues,
  errors: {},
  touched: {},
};

const validate = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Vui lòng nhập họ và tên.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Họ và tên phải có ít nhất 2 ký tự.';
  }

  if (!values.email.trim()) {
    errors.email = 'Vui lòng nhập địa chỉ email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Email không hợp lệ (ví dụ: name@example.com).';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Vui lòng nhập số điện thoại.';
  } else if (!/^(0|\+84)[0-9]{9,10}$/.test(values.phone.trim().replace(/\s/g, ''))) {
    errors.phone = 'Số điện thoại không hợp lệ (10 số, bắt đầu bằng 0 hoặc +84).';
  }

  if (!values.subject.trim()) {
    errors.subject = 'Vui lòng nhập tiêu đề liên hệ.';
  } else if (values.subject.trim().length < 3) {
    errors.subject = 'Tiêu đề phải có ít nhất 3 ký tự.';
  }

  if (!values.message.trim()) {
    errors.message = 'Vui lòng nhập nội dung tin nhắn.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Nội dung phải có ít nhất 10 ký tự.';
  }

  return errors;
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FIELD': {
      const newValues = {
        ...state.values,
        [action.field]: action.value,
      };
      const validationErrors = validate(newValues);
      return {
        ...state,
        values: newValues,
        errors: {
          ...state.errors,
          [action.field]: validationErrors[action.field],
        },
      };
    }
    case 'BLUR_FIELD': {
      const validationErrors = validate(state.values);
      return {
        ...state,
        touched: {
          ...state.touched,
          [action.field]: true,
        },
        errors: {
          ...state.errors,
          [action.field]: validationErrors[action.field],
        },
      };
    }
    case 'SUBMIT_ATTEMPT': {
      const validationErrors = validate(state.values);
      const allTouched = Object.keys(state.values).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      );
      return {
        ...state,
        touched: allTouched,
        errors: validationErrors,
      };
    }
    case 'RESET_FORM': {
      return initialState;
    }
    default:
      return state;
  }
};

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { values, errors, touched } = state;

  const handleChange = (field) => (e) => {
    dispatch({ type: 'CHANGE_FIELD', field, value: e.target.value });
  };

  const handleBlur = (field) => () => {
    dispatch({ type: 'BLUR_FIELD', field });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    dispatch({ type: 'SUBMIT_ATTEMPT' });

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData({ ...values });
      setShowModal(true);
      dispatch({ type: 'RESET_FORM' });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contact-page">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white py-3">
              <h1 className="h4 mb-0">Liên hệ với chúng tôi</h1>
            </Card.Header>
            <Card.Body className="p-4">
              <p className="text-muted mb-4">
                Vui lòng điền thông tin bên dưới để gửi tin nhắn hoặc phản hồi.
              </p>

              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="contact-name">
                  <Form.Label>
                    Họ và tên <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập họ và tên của bạn"
                    value={values.name}
                    onChange={handleChange('name')}
                    onBlur={handleBlur('name')}
                    isInvalid={touched.name && !!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row className="g-3 mb-3">
                  <Col md={6}>
                    <Form.Group controlId="contact-email">
                      <Form.Label>
                        Email <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={values.email}
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="contact-phone">
                      <Form.Label>
                        Số điện thoại <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="0912345678"
                        value={values.phone}
                        onChange={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        isInvalid={touched.phone && !!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="contact-subject">
                  <Form.Label>
                    Tiêu đề <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tiêu đề liên hệ"
                    value={values.subject}
                    onChange={handleChange('subject')}
                    onBlur={handleBlur('subject')}
                    isInvalid={touched.subject && !!errors.subject}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.subject}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="contact-message">
                  <Form.Label>
                    Nội dung tin nhắn <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Nhập nội dung tin nhắn (tối thiểu 10 ký tự)..."
                    value={values.message}
                    onChange={handleChange('message')}
                    onBlur={handleBlur('message')}
                    isInvalid={touched.message && !!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex gap-2">
                  <Button variant="primary" type="submit" className="px-4">
                    Gửi liên hệ
                  </Button>
                  <Button
                    variant="outline-secondary"
                    type="button"
                    onClick={() => dispatch({ type: 'RESET_FORM' })}
                  >
                    Làm mới
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal Completed Lab5 */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="bg-success text-white">
          <Modal.Title>Completed Lab5</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert alert-success d-flex align-items-center mb-3" role="alert">
            <div>
              <strong>Thành công!</strong> Đã gửi biểu mẫu liên hệ thành công.
            </div>
          </div>
          <h6 className="fw-bold mb-2">Thông tin đã nhập vào form:</h6>
          {submittedData && (
            <div className="table-responsive">
              <table className="table table-bordered table-striped mb-0">
                <tbody>
                  <tr>
                    <th style={{ width: '35%' }} className="bg-light">
                      Họ và tên
                    </th>
                    <td>{submittedData.name}</td>
                  </tr>
                  <tr>
                    <th className="bg-light">Email</th>
                    <td>{submittedData.email}</td>
                  </tr>
                  <tr>
                    <th className="bg-light">Số điện thoại</th>
                    <td>{submittedData.phone}</td>
                  </tr>
                  <tr>
                    <th className="bg-light">Tiêu đề</th>
                    <td>{submittedData.subject}</td>
                  </tr>
                  <tr>
                    <th className="bg-light">Nội dung</th>
                    <td style={{ whiteSpace: 'pre-wrap' }}>
                      {submittedData.message}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
