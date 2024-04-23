import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline'
import IconButton from './IconButton'
import { addProductToWishlist, addToWishlist } from '../feature/wishlist/wishlistSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ element }) => {
  // console.log(element);
  const dispatch = useDispatch();

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item)); // to api user's wishlist database
    dispatch(addProductToWishlist(item)) // to user's wishlist locally
  };

  return (
    <div className="group relative">
      <div className="w-full overflow-hidden border border-gray-200 rounded-lg" >
        <div className='flex gap-4 p-5 absolute z-10'>
          <IconButton Solid={SolidHeartIcon} Outline={HeartIcon} color='text-rose-600'
            prodId={element._id}
            handleAdd={handleAddToWishlist}
          />
        </div>
        <div className='bg-cover aspect-h-4 aspect-w-3 group-hover:opacity-75'>
          <img
            src={element.images[0].url}
            alt={element.title}
            className='h-full w-full object-cover object-center' />
        </div >
        <div className="flex flex-1 flex-col space-y-2 p-4">
          <h3 className="text-sm font-medium text-gray-900">
            <Link
              state={{ slug: element.slug }}
              to={`/${element.slug}`}
            >
              <span aria-hidden="true" className="absolute inset-0" />
              {element.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-500">{element.description}</p>
          <div className="flex flex-1 flex-col justify-end">
            <p className="text-sm italic text-gray-500">{element.material}</p>
            <p className="text-base font-medium text-gray-900">₹{element.price > 9999 ? element.price.toLocaleString() : element.price}</p>
          </div>
        </div>
      </div>
    </div >
  )
}

Product.propTypes = {
  element: PropTypes.object.isRequired
};

export default Product