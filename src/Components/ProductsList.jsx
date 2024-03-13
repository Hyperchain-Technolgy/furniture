import Product from "./Product"
import { data as furnituresData } from '../furnituresData'

const ProductsList = () => {
  return (
    <section className="container mx-auto px-10 flex flex-col gap-5 items-center sm:flex-row justify-center">
      {furnituresData.map(data => (
        <Product key={data.id} data={data} />
      ))}
    </section>
  )
}

export default ProductsList