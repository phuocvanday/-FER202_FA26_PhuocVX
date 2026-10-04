import Container from 'react-bootstrap/Container'
import StepCounter from './usereducer/StepCounter'
import './App.css'

function App() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">useReducer Exercises</h1>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 1: Bộ đếm có bước nhảy và lịch sử</h2>
        <StepCounter />
      </section>
    </Container>
  )
}

export default App
