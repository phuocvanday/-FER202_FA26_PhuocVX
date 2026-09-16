import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './ProductList'
import products from './data/products'

function App() {
  return (
    <div className="py-4">
      <h1 className="text-center mb-4">Danh sách sản phẩm</h1>
      <ProductList products={products} />
    </div>
  )
}

export default App
