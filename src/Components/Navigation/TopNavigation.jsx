import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import SearchBar from '../SearchBar'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const TopNavigation = ({ navigation, setOpen, classNames, currencies }) => {
  return (
    <div className="relative">
      <div aria-label="Top">
        {/* Top navigation */}
        <div className="bg-foreground">
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Currency selector */}
            <form>
              <div>
                <label htmlFor="desktop-currency" className="sr-only">
                  Currency
                </label>
                <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                  <select
                    id="desktop-currency"
                    name="currency"
                    className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                    <ChevronDownIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </form>

            <div className="flex items-center space-x-6">
              <Link to="/login">
                <span className="text-sm font-medium text-white hover:text-gray-100">
                  Sign in
                </span>
              </Link>
              <Link to="/register">
                <span className="text-sm font-medium text-white hover:text-gray-100">
                  Create an account
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary navigation */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <Link to='/'>
                    <span className="sr-only">Furniture.</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <Popover.Group className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? 'border-pink text-pink'
                                      : 'border-transparent text-foreground hover:text-foreground',
                                    'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                  )}
                                >
                                  {category.name}
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute inset-x-0 top-full text-sm text-foreground">
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                  <div className="relative bg-white">
                                    <div className="mx-auto max-w-7xl px-8">
                                      <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                        {category.featured.map((item) => (

                                          <div key={item.title} className="group relative">
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.title}
                                                className="object-cover object-center"
                                              />
                                            </div>
                                            <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                                              {item.name}
                                            </a>
                                            <p aria-hidden="true" className="mt-1">
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}

                      {/* {navigation.pages.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          {page.name}
                        </a>
                      ))} */}

                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  {/* <SearchBar /> */}
                  <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Furniture.</span>
                  <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600"
                    alt=""
                    className="h-8 w-auto"
                  />
                </a>

                <div className="flex flex-1 items-center justify-end gap-5">
                  <span className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                    <SearchBar />
                  </span>
                  <Link to="/cart">
                    <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default TopNavigation