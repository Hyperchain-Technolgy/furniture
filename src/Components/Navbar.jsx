import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <header className="grid grid-cols-3 justify-items-center items-center max-w-full font-medium">
      <div>
        <img src={logo} alt="Logo" className='w-32' />
      </div>
      <nav>
        <ul className="grid grid-cols-5 cursor-pointer">
          <li><Link className='hover:text-pink' to="/">Home</Link></li>
          <li><a className='hover:text-pink'>Pages</a></li>
          <li><a className='hover:text-pink'>Products</a></li>
          <li><a className='hover:text-pink'>Shop</a></li>
          <li><a className='hover:text-pink'>Contact</a></li>
        </ul>
      </nav>
      <SearchBar />
    </header>
  )
}

export default Navbar