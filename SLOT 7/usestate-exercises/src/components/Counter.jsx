import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="exercise-box text-center">
      <Button variant="light" onClick={handleIncrement}>
        Increment
      </Button>
      <p className="exercise-output mt-4 mb-0">Count: {count}</p>
    </div>
  );
};

export default Counter;
