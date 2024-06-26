import { Fragment } from 'react'
import { Dialog, Tab, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UserProfile from '../User Profile/UserProfile'
import PropTypes from 'prop-types';

const MobileMenu = ({ open, setOpen, navigation, currencies }) => {
  const user = useSelector(state => state.auth.user)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <Tab.Panels as={Fragment}>
                  <Tab.Panel key={navigation.name} className="space-y-12 px-4 pb-6 pt-10">
                    <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p className="font-medium text-gray-900">
                            Office furniture
                          </p>
                          <ul
                            role="list"
                            className="mt-6 space-y-6"
                          >
                            {navigation.office.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p id="mobile-categories-heading" className="font-medium text-gray-900">
                            Home furniture
                          </p>
                          <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                            {navigation.home.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p id="mobile-collection-heading" className="font-medium text-gray-900">
                            Art
                          </p>
                          <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                            {navigation.art.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <div className='flex items-center' key={page.name}>
                    <Link
                      to={page.href}
                    >
                      <span className="text-sm font-medium text-gray-700 hover:text-gray-800">{page.name}</span>
                    </Link>
                  </div>
                ))}
              </div>

              {user === null || user.token === undefined ?
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link to="/login">
                      <span className="-m-2 block p-2 font-medium text-gray-900">
                        Create an account
                      </span>
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link to="/register">
                      <span className="-m-2 block p-2 font-medium text-gray-900">
                        Sign in
                      </span>
                    </Link>
                  </div>
                </div> :
                <UserProfile />
              }

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {/* Currency selector */}
                <form>
                  <div className="inline-block">
                    <label htmlFor="mobile-currency" className="sr-only">
                      Currency
                    </label>
                    <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                      <select
                        id="mobile-currency"
                        name="currency"
                        className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                      >
                        {currencies.map((currency) => (
                          <option key={currency}>{currency}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                        <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root >
  )
}

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
};

export default MobileMenu