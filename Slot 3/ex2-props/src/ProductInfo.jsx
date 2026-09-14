function ProductInfo({ Name, Price, tag, image }) {
  return (
    <div className="product-card">
      {image && (
        <img src={image} alt={Name} className="product-image" />
      )}
      <span className="product-tag">{tag}</span>
      <h2 className="product-name">{Name}</h2>
      <p className="product-price">{Price.toLocaleString('vi-VN')} đ</p>
    </div>
  )
}

export default ProductInfo
