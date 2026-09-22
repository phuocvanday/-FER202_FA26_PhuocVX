import Form from 'react-bootstrap/Form';

const InputField = ({ id, label, helpText, ...inputProps }) => (
  <Form.Group className="mb-3" controlId={id}>
    <Form.Label>
      {label}
      {inputProps.required && <span className="text-danger"> *</span>}
    </Form.Label>
    <Form.Control {...inputProps} />
    {helpText && <Form.Text muted>{helpText}</Form.Text>}
  </Form.Group>
);

export default InputField;
