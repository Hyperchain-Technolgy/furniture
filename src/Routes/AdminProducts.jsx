import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../feature/adminSlices/AdminProductSlice";
import Loading from "../Components/Loading";
import Nav from "../Components/Admin/Nav";
import Navlist from "../Components/Admin/Navlist";
import { Cog8ToothIcon, TrashIcon } from '@heroicons/react/24/solid';
import AddProduct from "../Components/AddProduct";

function AdminProducts() {
  const { allProducts, loading, error } = useSelector((state) => state.adminProduct);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <Loading text="Loading products..." />
  }

  if (error) {
    return (
      <div className="h-screen bg-gray-800 flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-800">
      <Nav />

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <Navlist />
        </div>
      </aside>

      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} product={selectedProduct} />}

      <div className="sm:ml-64 mt-[3rem] pt-[1rem]">
        <div className="p-4 block sm:flex items-center justify-between border-b border-gray-200 border-gray-700">
          <div className="mb-1 w-full">
            <div className="mb-4">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All products</h1>
            </div>
            <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
              <div className="flex items-center mb-4 sm:mb-0">
                <form className="sm:pr-3" action="#" method="GET">
                  <label htmlFor="products-search" className="sr-only">Search</label>
                  <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                    <input type="text" name="email" id="products-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for products">
                    </input>
                  </div>
                </form>
              </div>

              <button
                id="createProductButton"
                type="button"
                onClick={() => {
                  setShowAddProduct(true);
                  setSelectedProduct(null);
                }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add new product
              </button>

            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                        Product Name
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                        Description
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                        Price
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                        Quantity
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {allProducts.map(product => (
                      <tr key={product._id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div className="text-base font-semibold text-gray-900 dark:text-white">{product.title}</div>
                          <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{product.category}</div>
                        </td>
                        <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">{product.description}</td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.price}</td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.quantity}</td>

                        <td className="p-4 space-x-2 whitespace-nowrap">
                          <button
                            onClick={() => {
                              setShowAddProduct(true);
                              setSelectedProduct(product);
                            }}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <Cog8ToothIcon className="w-4 h-4 mr-2" />
                            Update
                          </button>

                          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                            <TrashIcon className="w-4 h-4 mr-2" />
                            Delete item
                          </button>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AdminProducts