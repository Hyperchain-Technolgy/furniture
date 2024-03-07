import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <header className="grid grid-cols-3 justify-items-center items-center font-medium">
      <div>
        <img src={logo} alt="Logo" className='w-32' />
      </div>
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
    </header>
  )
}

export default Navbar