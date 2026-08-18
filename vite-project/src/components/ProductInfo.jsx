const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price:"$999.99",
    availability: "In Stock",
  }

  return (
    <div>
      product name: {product.name} <br />
      product price: {product.price} <br />
      product availability: {product.availability}
    </div>
  )
}

export default ProductInfo
