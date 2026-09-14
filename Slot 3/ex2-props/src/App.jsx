import ProductInfo from './ProductInfo'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Danh sách sản phẩm</h1>
      <div className="product-list">
        <ProductInfo
          Name="iPhone 15 Pro"
          Price={28990000}
          tag="Mới"
          image="/image/iphone15prm.jpg"
        />
        <ProductInfo Name="MacBook Air M3" Price={27990000} tag="Bán chạy" />
        <ProductInfo Name="AirPods Pro 2" Price={5990000} tag="Giảm giá" />
      </div>
    </div>
  )
}

export default App
