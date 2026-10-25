import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import useAxios from '../../hooks/useAxios';
import AsyncContent from '../common/AsyncContent';
import postApi from '../../api/postApi';
import ResultBox from './ResultBox';

const POST_ID = 1;

export default function UpdatePostCard() {
  const { data, loading, error, refetch } = useAxios(
    (signal) => postApi.getById(POST_ID, signal),
    []
  );
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState(null);
  const [saveError, setSaveError] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const handleUpdate = async () => {
    const errs = {};
    if ((form?.title ?? '').trim().length < 5) errs.title = 'Tiêu đề tối thiểu 5 ký tự';
    if ((form?.body ?? '').trim().length < 10) errs.body = 'Nội dung tối thiểu 10 ký tự';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSaving(true);
    setSaveError(null);
    try {
      const res = await postApi.update(POST_ID, {
        id: form.id,
        userId: form.userId,
        title: form.title.trim(),
        body: form.body.trim(),
      });
      setResult({ status: res.status, duration: res.duration, data: res.data });
    } catch (err) {
      setSaveError(err.userMessage ?? err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Header>
        <strong>2.3 · PUT</strong> /posts/{POST_ID}
      </Card.Header>
      <Card.Body>
        <AsyncContent
          loading={loading || (!!data && !form)}
          error={error}
          data={data}
          onRetry={refetch}
        >
          {() =>
            form && (
              <Form noValidate>
                <Form.Control
                  className="mb-2"
                  value={form.title}
                  isInvalid={!!errors.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <Form.Control.Feedback type="invalid" className="mb-2">
                  {errors.title}
                </Form.Control.Feedback>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="mb-2"
                  value={form.body}
                  isInvalid={!!errors.body}
                  onChange={(e) => setForm({ ...form, body: e.target.value })}
                />
                <Form.Control.Feedback type="invalid" className="mb-2">
                  {errors.body}
                </Form.Control.Feedback>
                <Button variant="primary" onClick={handleUpdate} disabled={saving}>
                  {saving ? (
                    <>
                      <Spinner size="sm" /> Đang lưu...
                    </>
                  ) : (
                    'Cập nhật (PUT)'
                  )}
                </Button>
              </Form>
            )
          }
        </AsyncContent>
        {saveError && (
          <Alert variant="danger" className="mt-3 mb-0">
            {saveError}
          </Alert>
        )}
        <ResultBox result={result} />
      </Card.Body>
    </Card>
  );
}
