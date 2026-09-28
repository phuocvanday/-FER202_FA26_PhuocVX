import Container from 'react-bootstrap/Container'
import Counter from './components/Counter'
import ControlledInput from './components/ControlledInput'
import './App.css'

function App() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Exercise 12: React Hook (useState)</h1>

      <section className="mb-5">
        <h2 className="h4 mb-3">Exercise 1: Counter</h2>
        <Counter />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Exercise 2: Controlled Input Field</h2>
        <ControlledInput />
      </section>
    </Container>
  )
}

export default App
