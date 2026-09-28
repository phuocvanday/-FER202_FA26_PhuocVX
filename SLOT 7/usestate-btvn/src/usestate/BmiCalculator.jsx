import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

const classify = (bmi) => {
  if (bmi < 18.5) return { label: 'Thiếu cân', variant: 'info' };
  if (bmi < 23) return { label: 'Bình thường', variant: 'success' };
  if (bmi < 25) return { label: 'Thừa cân', variant: 'warning' };
  return { label: 'Béo phì', variant: 'danger' };
};

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('cm');

  const h = Number(height);
  const w = Number(weight);
  const meters = unit === 'cm' ? h / 100 : h;

  const errors = {};
  if (height !== '' && !(meters >= 0.5 && meters <= 2.5)) {
    errors.height = unit === 'cm' ? 'Chiều cao từ 50 đến 250 cm' : 'Chiều cao từ 0.5 đến 2.5 m';
  }
  if (weight !== '' && !(w >= 10 && w <= 300)) {
    errors.weight = 'Cân nặng từ 10 đến 300 kg';
  }

  const ready = height !== '' && weight !== '' && !errors.height && !errors.weight;
  const bmi = ready ? w / (meters * meters) : null;
  const result = ready ? classify(bmi) : null;

  const changeUnit = (next) => {
    if (next === unit) return;
    if (height !== '') {
      const converted = next === 'm' ? h / 100 : h * 100;
      setHeight(String(Number(converted.toFixed(2))));
    }
    setUnit(next);
  };

  return (
    <Card>
      <Card.Body>
        <Form.Group className="mb-3" controlId="bmi-height">
          <Form.Label>Chiều cao</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder={unit === 'cm' ? 'VD: 170' : 'VD: 1.7'}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              isInvalid={!!errors.height}
            />
            <ButtonGroup>
              {['cm', 'm'].map((u) => (
                <Button
                  key={u}
                  variant={unit === u ? 'primary' : 'outline-primary'}
                  onClick={() => changeUnit(u)}
                >
                  {u}
                </Button>
              ))}
            </ButtonGroup>
            <Form.Control.Feedback type="invalid">{errors.height}</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="bmi-weight">
          <Form.Label>Cân nặng (kg)</Form.Label>
          <Form.Control
            type="number"
            placeholder="VD: 65"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            isInvalid={!!errors.weight}
          />
          <Form.Control.Feedback type="invalid">{errors.weight}</Form.Control.Feedback>
        </Form.Group>

        {result ? (
          <Alert variant={result.variant} className="mb-0">
            BMI = {bmi.toFixed(1)} → {result.label}
          </Alert>
        ) : (
          <p className="text-muted mb-0">Nhập chiều cao và cân nặng hợp lệ để xem kết quả.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default BmiCalculator;
