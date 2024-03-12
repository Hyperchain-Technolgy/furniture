import Product from "./Product"
import chair from '../assets/chair.png'

const ProductsList = () => {
  return (
    <section className="container mx-auto px-10 flex flex-col gap-5 items-center sm:flex-row justify-center">
      <Product src={chair} price={4999} />
      <Product src={chair} price={4999} />
      <Product src={chair} price={4999} />
    </section>
  )
}

export default ProductsList