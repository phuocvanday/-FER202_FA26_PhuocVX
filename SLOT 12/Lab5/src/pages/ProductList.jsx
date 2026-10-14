import ProductFilter from '../components/ProductFilter';
import { products as defaultProducts } from '../data/products';

const ProductList = ({ products = defaultProducts, onAddToCart }) => (
  <div className="product-list-page">
    <ProductFilter products={products} onAddToCart={onAddToCart} />
  </div>
);

export default ProductList;
