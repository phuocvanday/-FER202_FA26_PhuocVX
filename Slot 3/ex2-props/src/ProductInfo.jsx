function ProductInfo({ Name, Price, tag }) {
  return (
    <div className="product-card">
      <span className="product-tag">{tag}</span>
      <h2 className="product-name">{Name}</h2>
      <p className="product-price">{Price.toLocaleString('vi-VN')} đ</p>
    </div>
  )
}

export default ProductInfo
