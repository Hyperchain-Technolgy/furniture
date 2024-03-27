import { CheckIcon, ClockIcon, XMarkIcon } from "@heroicons/react/20/solid"
import Button from '../Components/Button'

const TileViewProduct = ({ element, handleClick }) => {
  return (
    <li className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <img
          src={element.images[0].url}
          alt={element.title}
          className="h-24 w-24 rounded-md object-cover object-center sm:h-60 sm:w-60"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-lg">
                <span className="font-medium text-gray-700 hover:text-gray-800">
                  {element.title}
                </span>
              </h3>
            </div>
            <div className="mt-1 flex text-base">
              <div key={element.color}>
                <p className="text-gray-500">{element.color.join(" | ")}</p>
              </div>
            </div>
            <p className="mt-1 font-medium text-gray-900">₹ {element.price}</p>
            <Button content="Add to Cart" className="mt-3 rounded-md border border-foreground text-foreground active:bg-foreground px-3 py-1 text-sm font-semibold hover:text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50" />
          </div>


          <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className="absolute right-0 top-0">
              <button type="button"
                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                onClick={() => handleClick(element._id)}
              >
                <span className="sr-only">Remove</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
          {/* {element.inStock ? ( */}
          <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
          {/* ) : (
            <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
          )} */}

          <span>In stock</span>
          {/* <span>{element.inStock ? 'In stock' : `Ships in ${element.leadTime}`}</span> */}
        </p>
      </div>
    </li>
  )
}

export default TileViewProduct