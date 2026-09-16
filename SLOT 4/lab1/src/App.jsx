import 'bootstrap/dist/css/bootstrap.min.css'
import ProductInfo from './ProductInfo'

function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Danh sách sản phẩm</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <ProductInfo
          name="iPhone 15 Pro"
          price={28990000}
          tag="Mới"
          avatar="/image/iphone15prm.jpg"
        />
        <ProductInfo
          name="MacBook Air M3"
          price={27990000}
          tag="Bán chạy"
          avatar="/image/macbookair3.jpg"
        />
        <ProductInfo
          name="AirPods Pro 2"
          price={5990000}
          tag="Giảm giá"
          avatar="/image/airpodpro2.jpg"
        />
      </div>
    </div>
  )
}

export default App
