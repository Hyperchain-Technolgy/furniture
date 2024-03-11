import Product from "./Product"

const ProductsList = () => {
  return (
    <section className="container mx-auto px-10 flex flex-col gap-2 items-center">
      <Product />
      <Product />
      <Product />
    </section>
  )
}

export default ProductsList