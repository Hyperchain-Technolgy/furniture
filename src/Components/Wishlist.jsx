import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../feature/products/productSlice";
import { useEffect } from "react";
import TileViewProduct from "./TileViewProduct";
import { removeFromWishlist, removeProductFromWishlist } from "../feature/wishlist/wishlistSlice";
import { fetchUserInfo } from '../feature/auth/userInfoSlice'

const Wishlist = () => {
  const dispatch = useDispatch()

  const wishlistProductsId = useSelector(state => state.wishlist.products)
  const allProducts = useSelector(state => state.products.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const wishlistProducts = allProducts.filter(product => {
    return wishlistProductsId && wishlistProductsId.includes(product._id);
  });

  const handleRemove = async (_id) => {
    dispatch(removeFromWishlist(_id))
    dispatch(removeProductFromWishlist(_id))
  }

  return (
    <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <h2 className="text-md font-semibold">Your wishlist is empty.</h2>
      ) : (
        <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
          {wishlistProducts.map(element => (
            <TileViewProduct key={element._id} element={element} handleClick={handleRemove} />
          ))}
        </ul>)}
    </div>
  )
}

export default Wishlist