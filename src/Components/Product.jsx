import { ShoppingCartIcon as SolidShoppingCart, HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'
import IconButton from './IconButton'
import { addProductToWishlist, addToWishlist } from '../feature/wishlist/wishlistSlice';
import { useDispatch } from 'react-redux';


const Product = ({ element }) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item)); // to api user's wishlist database
    dispatch(addProductToWishlist(item)) // to user's wishlist locally
  };

  return (
    <div className="group relative">
      <div className="w-full overflow-hidden border rounded-md" >
        <div className='flex gap-4 p-5 absolute z-10'>
          <IconButton Solid={SolidShoppingCart} Outline={ShoppingCartIcon} />
          <IconButton Solid={SolidHeartIcon} Outline={HeartIcon} color='text-rose-600'
            prodId={element._id}
            handleAdd={handleAddToWishlist}
          />
        </div>
        <div className='overflow-hidden bg-cover bg-no-repeat'>
          <img
            src={element.images[0].url}
            alt={element.title}
            className='h-full w-full object-cover object-center transition duration-300 ease-in-out hover:scale-110' />
        </div >
        <div className='font-medium group-hover:bg-foreground duration-300 p-3 ease-in-out'>
          <h3 className="text-pink group-hover:text-white text-sm sm:text-base">
            <a href={element.image}>
              <span className="absolute inset-0" />
              {element.title}
            </a>
          </h3>
          <div className='flex gap-2 items-center'>
            <p className='group-hover:text-white duration-100 text-base sm:text-lg font-semibold'>₹{element.price}</p>
            <p className='text-gray-400 duration-100 text-lg line-through'>₹3999</p>
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-pink ring-1 ring-inset ring-red-600/10 group-hover:bg-blue-900 group-hover:ring-blue-50/10 group-hover:text-white">{'-20%'}</span>
          </div>
        </div >
      </div>
    </div>
  )
}

export default Product 