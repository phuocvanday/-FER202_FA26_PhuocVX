import 'bootstrap/dist/css/bootstrap.min.css'
import { Layout, CartTable, RegisterForm } from './components'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Layout title="Cửa hàng mini">
      <section id="home">
        <HomePage />
      </section>

      <section id="cart" className="mt-5">
        <h3 className="mb-3">Giỏ hàng</h3>
        <CartTable />
      </section>

      <section id="register" className="mt-5">
        <RegisterForm />
      </section>
    </Layout>
  )
}

export default App
