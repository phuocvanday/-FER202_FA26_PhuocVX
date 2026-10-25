import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function ConfirmModal({
  show,
  title,
  message,
  confirmText = 'Xác nhận',
  loading,
  onConfirm,
  onCancel,
}) {
  return (
    <Modal show={show} onHide={loading ? undefined : onCancel} centered>
      <Modal.Header closeButton={!loading}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel} disabled={loading}>
          Hủy
        </Button>
        <Button variant="danger" onClick={onConfirm} disabled={loading}>
          {loading ? (
            <>
              <Spinner size="sm" className="me-1" /> Đang xử lý...
            </>
          ) : (
            confirmText
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
