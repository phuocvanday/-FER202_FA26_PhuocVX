import QuantityPicker from './components/QuantityPicker';
import MiniCart from './components/MiniCart';
import ProfilePreview from './components/ProfilePreview';
import ProductFilter from './components/ProductFilter';
import RegisterForm from './components/RegisterForm';
import ValidatedRegisterForm from './components/ValidatedRegisterForm';
import TodoList from './components/TodoList';
import CartDemoPage from './pages/CartDemoPage';
import LoginForm from './components/LoginForm';
import { products } from './data/products';

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

    <section className="mb-5">
      <h2 className="h4 mb-3">Bài 3: Tìm kiếm, lọc và sắp xếp sản phẩm</h2>
      <ProductFilter products={products} />
    </section>

    <section className="mb-5">
      <h2 className="h4 mb-3">Bài 4: Form đăng ký có điều khiển</h2>
      <RegisterForm />
    </section>

    <section className="mb-5">
      <h2 className="h4 mb-3">Bài 5: Form đăng ký có validation</h2>
      <ValidatedRegisterForm />
    </section>

    <section className="mb-5">
      <h2 className="h4 mb-3">Bài 6: Todo list</h2>
      <TodoList />
    </section>

    <section className="mb-5">
      <h2 className="h4 mb-3">Bài 7: Giỏ hàng với useReducer</h2>
      <CartDemoPage />
    </section>

    <section className="mb-5">
      <h2 className="h4 mb-3">Bài 8: Form đăng nhập với useReducer</h2>
      <LoginForm />
    </section>
  </div>
);

export default App;
