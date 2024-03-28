import { useEffect } from "react"
import Product from "./Product"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../feature/products/productSlice";
import Loading from "./Loading";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)
  const isLoading = useSelector(state => state.products.isLoading)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  if (isLoading) return <Loading text="Processing..." />

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <section className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8">
        {products.map(element => (
          <Product key={element._id} element={element} />
        ))}
      </section>
    </div>
  )
}

export default ProductsList