import cart from '../assets/cart.svg'
import heart from '../assets/heart.svg'

const Product = ({ src, price }) => {
  return (
    <section className="border w-72 min-w-64 group hover:cursor-pointer">
      <section className='group-hover:bg-gray-100'>
        <div className='flex gap-4 p-5'>
          <img src={cart} alt="cart icon" />
          <img src={heart} alt="heart icon" />
        </div>
        <img src={src} alt="chair" className='w-44 mx-auto p-5' />
      </section>
      <div className='font-medium group-hover:bg-foreground duration-300 p-3'>
        <p className='text-pink group-hover:text-white'>Cantislever chair</p>
        <p className='group-hover:text-white duration-100 text-lg font-semibold'>₹{price}</p>
      </div>
    </section>
  )
}

export default Product