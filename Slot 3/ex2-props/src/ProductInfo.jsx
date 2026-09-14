import Card from './Card'

function ProductInfo({ Name, Price, tag, image }) {
  return (
    <Card className="product-card">
      <div className="product-image-wrapper">
        {image && <img src={image} alt={Name} className="product-image" />}
      </div>
      <div className="product-body">
        <span className="product-tag">{tag}</span>
        <h2 className="product-name">{Name}</h2>
        <p className="product-price">{Price.toLocaleString('vi-VN')} đ</p>
      </div>
    </Card>
  )
}

export default ProductInfo
