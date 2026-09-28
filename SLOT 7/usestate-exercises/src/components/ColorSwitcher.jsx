import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const COLORS = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
];

const ColorSwitcher = () => {
  const [color, setColor] = useState('');

  return (
    <div className="exercise-box">
      <div className="mx-auto" style={{ maxWidth: 240 }}>
        <Form.Select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          aria-label="Select a color"
        >
          <option value="">Select a color</option>
          {COLORS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Form.Select>
        <div className="color-box mt-2" style={{ backgroundColor: color || 'transparent' }} />
      </div>
    </div>
  );
};

export default ColorSwitcher;
