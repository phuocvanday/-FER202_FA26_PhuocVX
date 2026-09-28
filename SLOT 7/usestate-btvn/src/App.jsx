import Container from "react-bootstrap/Container";
import FaqAccordion from "./usestate/FaqAccordion";
import "./App.css";

function App() {
  return (
    <Container className="py-4" style={{ maxWidth: 720 }}>
      <h1 className="mb-4">Bài tập useState</h1>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 1: FAQ Accordion</h2>
        <FaqAccordion />
      </section>
    </Container>
  );
}

export default App;
