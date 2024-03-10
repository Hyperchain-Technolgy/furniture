import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <section className="flex container mx-auto items-center justify-between font-medium h-28">
      <h1 className='w-32 font-bold text-lg'>Furniture.</h1>
      <nav>
        <ul className="flex cursor-pointer">
          <li><Link className='mx-5 hover:text-pink' to="/">Home</Link></li>
          <li><a className='mx-5 hover:text-pink'>Pages</a></li>
          <li><a className='mx-5 hover:text-pink'>Products</a></li>
          <li><a className='mx-5 hover:text-pink'>Shop</a></li>
          <li><a className='mx-5 hover:text-pink'>Contact</a></li>
        </ul>
      </nav>
      <SearchBar />
    </section>
  )
}

export default Navbar