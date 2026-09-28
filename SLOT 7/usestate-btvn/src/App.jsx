import Container from "react-bootstrap/Container";
import FaqAccordion from "./usestate/FaqAccordion";
import ReviewForm from "./usestate/ReviewForm";
import BmiCalculator from "./usestate/BmiCalculator";
import StudentManager from "./usestate/StudentManager";
import QuizApp from "./usestate/QuizApp";
import "./App.css";

function App() {
  return (
    <Container className="py-4" style={{ maxWidth: 900 }}>
      <h1 className="mb-4">Bài tập useState</h1>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 1: FAQ Accordion</h2>
        <FaqAccordion />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 2: Đánh giá sao</h2>
        <ReviewForm />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 3: Máy tính BMI</h2>
        <BmiCalculator />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 4: Quản lý điểm sinh viên</h2>
        <StudentManager />
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Bài 5: Quiz trắc nghiệm</h2>
        <QuizApp />
      </section>
    </Container>
  );
}

export default App;
