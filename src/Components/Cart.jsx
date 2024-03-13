import { Fragment } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Popover, Transition } from '@headlessui/react'

const products = [
  {
    id: 1,
    title: 'Armchair with Head Rester',
    price: 300,
    imageSrc: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/armchair.jpg',
  }, {
    id: 2,
    title: 'Beige Living Room Sofa',
    price: 300,
    imageSrc: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/sofa.jpg',
  }, {
    id: 3,
    title: 'Classic Wooden Table',
    price: 300,
    imageSrc: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/table.jpg',
  }, {
    id: 4,
    title: 'Computer Table with Office Chair',
    price: 300,
    imageSrc: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2017/12/office-table.jpg',
  },
]

const Cart = () => {
  return (
    <section className="relative bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0">
          <div className="flex h-16 items-center justify-between">
            <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
              <Popover.Button className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-foreground group-hover:text-pink"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-foreground group-hover:text-pink">{products.length}</span>
                <span className="sr-only">items in cart, view bag</span>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                  <h2 className="sr-only">Shopping Cart</h2>

                  <form className="mx-auto max-w-2xl px-4">
                    <ul role="list" className="divide-y divide-gray-200">
                      {products.map((product) => (
                        <li key={product.id} className="flex items-center py-6">
                          <img
                            src={product.imageSrc}
                            alt={product.title}
                            className="h-16 w-16 flex-none rounded-md border border-gray-200"
                          />
                          <div className="ml-4 flex-auto">
                            <h3 className="font-medium text-gray-900">
                              <a href={product.title}>{product.title}</a>
                            </h3>
                            <p className="text-gray-500">₹{product.price}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="submit"
                      className="w-full rounded-md border border-transparent bg-pink px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-violet focus:outline-none focus:ring-2 focus:ring-violet focus:ring-offset-2 duration-300"
                    >
                      Checkout
                    </button>
                  </form>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
      </nav>
    </section >
  )
}

export default Cart