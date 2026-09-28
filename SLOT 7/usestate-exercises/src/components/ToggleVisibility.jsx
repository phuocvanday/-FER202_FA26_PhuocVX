import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="exercise-box text-center">
      <Button variant="light" onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'}
      </Button>
      {isVisible && <p className="exercise-output mt-4 mb-0">Toggle me!</p>}
    </div>
  );
};

export default ToggleVisibility;
