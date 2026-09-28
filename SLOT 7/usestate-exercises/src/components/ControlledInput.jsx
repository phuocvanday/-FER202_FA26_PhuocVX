import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const ControlledInput = () => {
  const [text, setText] = useState('');

  return (
    <div className="exercise-box text-center">
      <Form.Control
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        aria-label="Input text"
        className="mx-auto"
        style={{ maxWidth: 380 }}
      />
      <p className="exercise-output mt-4 mb-0">Input text: {text}</p>
    </div>
  );
};

export default ControlledInput;
