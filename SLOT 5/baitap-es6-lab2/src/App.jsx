import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WelcomeCard from './components/WelcomeCard'
import StudentCard from './components/StudentCard'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
import { products } from './data/products'
import taiNgheImg from './assets/products/tainghe-bluetooth.png'
import chuotImg from './assets/products/chuot-khong-day.png'
import './App.css'

const student1 = {
  id: 'SE1701',
  name: 'Nguyễn Văn An',
  major: 'Software Engineering',
  gpa: 8.5,
  avatar: 'https://i.pravatar.cc/200?img=12',
  contact: { email: 'an.nv@fpt.edu.vn', phone: '0901 234 567' },
}

const student2 = {
  id: 'SE1702',
  name: 'Trần Thị Bình',
  major: 'Artificial Intelligence',
  gpa: 9.0,
  avatar: 'https://i.pravatar.cc/200?img=5',
  contact: { email: 'binh.tt@fpt.edu.vn', phone: '0902 345 678' },
}

const student3 = {
  id: 'SE1703',
  name: 'Lê Minh Cường',
  major: 'Digital Marketing',
  gpa: 7.8,
  avatar: 'https://i.pravatar.cc/200?img=33',
  contact: { email: 'cuong.lm@fpt.edu.vn', phone: '0903 456 789' },
}

const productA = {
  id: 1,
  name: 'Tai nghe Bluetooth',
  price: 590000,
  image: taiNgheImg,
  rating: { rate: 4.5, count: 120 },
  category: { name: 'Âm thanh' },
  inStock: true,
  discount: 10,
}
const productB = {
  id: 2,
  name: 'Chuột không dây',
  price: 0,
  image: chuotImg,
  inStock: true,
}
const productC = { id: 3 }

function App() {
  return (
    <div className="container my-4">
      <WelcomeCard />

      <div className="d-flex gap-3 flex-wrap mt-4">
        <StudentCard student={student1} />
        <StudentCard student={student2} />
        <StudentCard student={student3} />
      </div>

      <Row className="mt-4 g-4">
        <Col md={4}>
          <ProductCard product={productA} />
        </Col>
        <Col md={4}>
          <ProductCard product={productB} />
        </Col>
        <Col md={4}>
          <ProductCard product={productC} />
        </Col>
      </Row>

      <div className="mt-5">
        <ProductList products={products} />
      </div>
    </div>
  )
}

export default App
