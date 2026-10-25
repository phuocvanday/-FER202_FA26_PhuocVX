import Alert from 'react-bootstrap/Alert';

export default function EmptyState({ text = 'Không có dữ liệu.' }) {
  return <Alert variant="info">{text}</Alert>;
}
