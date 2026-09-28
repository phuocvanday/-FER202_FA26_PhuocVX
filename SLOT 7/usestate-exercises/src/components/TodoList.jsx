import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    const text = task.trim();
    if (!text) return;
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), text }]);
    setTask('');
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="exercise-box">
      <Row className="g-4 align-items-start">
        <Col md={6}>
          <Form onSubmit={handleAdd} className="d-flex gap-3">
            <Form.Control
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Please input a Task"
              aria-label="Task"
            />
            <Button type="submit" variant="danger" className="text-nowrap px-4">
              Add Todo
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <div className="todo-panel">
            <h3 className="h5 fw-bold text-center mb-3">Todo List</h3>
            {todos.length === 0 ? (
              <p className="text-muted text-center mb-0">No tasks yet</p>
            ) : (
              <ListGroup className="gap-2">
                {todos.map(({ id, text }) => (
                  <ListGroup.Item
                    key={id}
                    className="d-flex justify-content-between align-items-center rounded border-0 shadow-sm"
                  >
                    <span className="fs-5">{text}</span>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(id)}>
                      Delete
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TodoList;
