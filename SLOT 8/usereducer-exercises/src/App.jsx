import Container from 'react-bootstrap/Container'
import StepCounter from './usereducer/StepCounter'
import OrderTracker from './usereducer/OrderTracker'
import KanbanBoard from './usereducer/KanbanBoard'
import CourseWizard from './usereducer/CourseWizard'
import NotesBoard from './usereducer/NotesBoard'
import './App.css'

function App() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">useReducer Exercises</h1>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 1: Bộ đếm có bước nhảy và lịch sử</h2>
        <StepCounter />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 2: Theo dõi trạng thái đơn hàng</h2>
        <OrderTracker />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 3: Bảng Kanban</h2>
        <KanbanBoard />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 4: Form đăng ký khóa học nhiều bước</h2>
        <CourseWizard />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 5: Bảng ghi chú có Hoàn tác / Làm lại</h2>
        <NotesBoard />
      </section>
    </Container>
  )
}

export default App
