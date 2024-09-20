import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import FormField from './FormField';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../feature/adminSlices/adminProductSlice';
import { XCircleIcon } from '@heroicons/react/24/solid';

const AddProduct = ({ setShowAddProduct, product }) => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    quantity: '',
    category: '',
    description: '',
    images: [],
    color: [],
    material: '',
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setNewProduct({
        title: product.title || '',
        price: product.price || '',
        quantity: product.quantity || '',
        category: product.category || '',
        description: product.description || '',
        images: product.images || [],
        color: product.color || [],
        material: product.material || '',
      });
      setImagePreviews(product.images.map(img => URL.createObjectURL(img)));
    }
  }, [product]);

  const validateForm = () => {
    if (!newProduct.title || !newProduct.price || !newProduct.quantity || !newProduct.category || !newProduct.description) {
      setError('Please fill all required fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setError('');

    const formData = new FormData();
    Object.keys(newProduct).forEach(key => {
      if (key === 'images') {
        for (let i = 0; i < newProduct.images.length; i++) {
          formData.append('images', newProduct.images[i]);
        }
      } else {
        formData.append(key, newProduct[key]);
      }
    });

    if (product) {
      dispatch(updateProduct({ id: product._id, data: formData }));
    } else {
      dispatch(addProduct(formData));
    }
    setShowAddProduct(false);
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setNewProduct(prevState => ({
      ...prevState,
      images: [...prevState.images, ...files]
    }));
    setImagePreviews(prevPreviews => [
      ...prevPreviews,
      ...files.map(file => URL.createObjectURL(file))
    ]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = newProduct.images.filter((_, i) => i !== index);
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    setNewProduct({ ...newProduct, images: updatedImages });
    setImagePreviews(updatedPreviews);
  };

  return (
    <div className="border-solid fixed top-0 right-80 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800">
      <h5 className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">New Product</h5>
      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
      </button>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          <FormField
            label="Name"
            type="text"
            name="title"  
            value={newProduct.title}
            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            placeholder="Type product name"
          />
          <FormField
            label="Price"
            type="number"
            name="price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            placeholder="2999"
          />
          <FormField
            label="Quantity"
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
            placeholder="100"
          />
          <FormField
            label="Category"
            type="text"
            name="category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            placeholder="Type product category"
          />
          <FormField
            label="Description"
            type="textarea"
            name="description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            placeholder="Enter product description here"
          />
          <FormField
            label="Color"
            type="text"
            name="color"
            value={newProduct.color.join(', ')}
            onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value.split(',').map(c => c.trim()) })}
            placeholder="Enter product color here"
          />
          <FormField
            label="Material"
            type="text"
            name="material"
            value={newProduct.material}
            onChange={(e) => setNewProduct({ ...newProduct, material: e.target.value })}
            placeholder="Enter product material here"
          />
          <FormField
            label="Images"
            type="file"
            name="images"
            onChange={handleImagesChange}
          />
          <div className="image-previews grid grid-cols-3 gap-2">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative">
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute bottom-[4rem] text-red-500 right-0 rounded-full p-1"
                >
                  <XCircleIcon className="w-5 h-5" />
                </button>
                <img src={preview} alt="Preview" className="w-20 h-20 object-cover" />
              </div>
            ))}
          </div>
          <div className="bottom-[-100px] left-0 flex justify-center w-full pb-4 space-x-4 md:px-4">
            <button
              type="submit"
              className="text-white w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add product
            </button>
            <button
              onClick={() => setShowAddProduct(false)}
              type="button" className="inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              <svg aria-hidden="true" className="w-5 h-5 -ml-1 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddProduct.propTypes = {
  setShowAddProduct: PropTypes.func.isRequired,
  product: PropTypes.object,
};

export default AddProduct;
