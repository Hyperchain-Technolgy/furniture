import Product from "./Product"

const ProductsList = ({ data }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <section className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8">
        {data.map(element => (
          <Product key={element.id} element={element} />
        ))}
      </section>
    </div>
  )
}

export default ProductsList