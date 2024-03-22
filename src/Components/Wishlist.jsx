import { useSelector } from "react-redux"
import Product from '../Components/Product'

const Wishlist = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <section className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Wishlist</h1>

      </section >
    </div >
  )
}

export default Wishlist