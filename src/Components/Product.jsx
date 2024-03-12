import cart from '../assets/cart.svg'
import heart from '../assets/heart.svg'
import SecondaryButton from './SecondaryButton'

const Product = ({ src, price }) => {
  return (
    <section className="border w-72 min-w-64 group hover:cursor-pointer" >
      <section className='group-hover:bg-gray-100'>
        <div className='flex gap-4 p-5'>
          <SecondaryButton src={cart} alt="cart icon" />
          <SecondaryButton src={heart} alt="heart icon" />
        </div>
        <img src={src} alt="chair" className='w-44 mx-auto p-5' />
      </section>
      <div className='font-medium group-hover:bg-foreground duration-300 p-3'>
        <p className='text-pink group-hover:text-white'>Cantislever chair</p>
        <div className='flex gap-2 items-center'>
          <p className='group-hover:text-white duration-100 text-lg font-semibold'>₹{price}</p>
          <p className='text-gray-400 duration-100 text-lg line-through'>₹3999</p>
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-pink ring-1 ring-inset ring-red-600/10 group-hover:bg-blue-900 group-hover:ring-blue-50/10 group-hover:text-white">{'-20%'}</span>
        </div>
      </div>
    </section >
  )
}

export default Product 