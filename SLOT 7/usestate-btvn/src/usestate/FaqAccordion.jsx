import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const faqs = [
  { id: 1, question: 'React là gì?', answer: 'Thư viện JavaScript để xây dựng giao diện người dùng theo component.' },
  { id: 2, question: 'State khác props thế nào?', answer: 'Props do cha truyền xuống và chỉ đọc; state do chính component quản lý và thay đổi được.' },
  { id: 3, question: 'Vì sao phải dùng setState?', answer: 'Vì chỉ khi gọi hàm set, React mới biết dữ liệu đổi để render lại giao diện.' },
];

const FaqCard = ({ question, answer, isOpen, onToggle }) => (
  <Card className="mb-2">
    <Card.Header
      role="button"
      onClick={onToggle}
      className="d-flex justify-content-between align-items-center fw-semibold"
    >
      {question}
      <span className="fs-5">{isOpen ? '−' : '+'}</span>
    </Card.Header>
    {isOpen && <Card.Body>{answer}</Card.Body>}
  </Card>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FaqCard
      question={question}
      answer={answer}
      isOpen={isOpen}
      onToggle={() => setIsOpen((open) => !open)}
    />
  );
};

const FaqAccordion = () => {
  const [singleMode, setSingleMode] = useState(false);
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form.Check
          type="switch"
          id="single-mode"
          label="Chỉ mở một câu tại một thời điểm"
          checked={singleMode}
          onChange={(e) => {
            setSingleMode(e.target.checked);
            setOpenId(null);
          }}
        />
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={!singleMode || openId === null}
          onClick={() => setOpenId(null)}
        >
          Đóng tất cả
        </Button>
      </div>

      {singleMode
        ? faqs.map(({ id, question, answer }) => (
            <FaqCard
              key={id}
              question={question}
              answer={answer}
              isOpen={openId === id}
              onToggle={() => handleToggle(id)}
            />
          ))
        : faqs.map(({ id, question, answer }) => (
            <FaqItem key={id} question={question} answer={answer} />
          ))}
    </div>
  );
};

export default FaqAccordion;
