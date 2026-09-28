import { useState } from 'react';

const LABELS = ['', 'Rất tệ', 'Tệ', 'Bình thường', 'Tốt', 'Tuyệt vời'];

const StarRating = ({ value, onChange, max = 5 }) => {
  const [hovered, setHovered] = useState(0);

  const display = hovered || value;

  return (
    <div className="d-flex align-items-center gap-3">
      <div onMouseLeave={() => setHovered(0)}>
        {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
          <span
            key={star}
            role="button"
            className="fs-2 px-1"
            style={{ color: star <= display ? '#ffc107' : '#ced4da' }}
            onMouseEnter={() => setHovered(star)}
            onClick={() => onChange(star === value ? 0 : star)}
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-muted">{display ? LABELS[display] : 'Chưa đánh giá'}</span>
    </div>
  );
};

export default StarRating;
