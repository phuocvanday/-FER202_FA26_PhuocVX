import QuantityPicker from './components/QuantityPicker';
import MiniCart from './components/MiniCart';
import ProfilePreview from './components/ProfilePreview';

const App = () => (
  <div className="container my-4">
    <h1 className="mb-4">Lab 4 – Exercises Hooks</h1>

    <section className="mb-5">
      <h2 className="h4 mb-3">Bài 1: Bộ chọn số lượng và giỏ hàng mini</h2>

      <h5>Phần 1. Bộ chọn số lượng</h5>
      <div className="d-flex flex-column gap-3 mb-4">
        <QuantityPicker />
        <QuantityPicker min={2} max={5} />
      </div>

      <h5>Phần 2. Giỏ hàng mini</h5>
      <MiniCart />
    </section>

    <section className="mb-5">
      <h2 className="h4 mb-3">Bài 2: Form hồ sơ xem trước trực tiếp</h2>
      <ProfilePreview />
    </section>
  </div>
);

export default App;
