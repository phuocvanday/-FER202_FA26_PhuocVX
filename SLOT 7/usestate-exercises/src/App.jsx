import Container from 'react-bootstrap/Container'
import Counter from './components/Counter'
import ControlledInput from './components/ControlledInput'
import ToggleVisibility from './components/ToggleVisibility'
import TodoList from './components/TodoList'
import ColorSwitcher from './components/ColorSwitcher'
import SearchFilter from './components/SearchFilter'
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

      <section className="mb-5">
        <h2 className="h4 mb-3">Exercise 3: Toggle Visibility</h2>
        <ToggleVisibility />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Exercise 4: Todo List</h2>
        <TodoList />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Exercise 5: Color Switcher</h2>
        <ColorSwitcher />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Exercise 6: Search Filter</h2>
        <SearchFilter />
      </section>
    </Container>
  )
}

export default App
