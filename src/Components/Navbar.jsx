import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <header className="grid grid-cols-2 justify-items-center items-center max-w-full font-medium">
      <div>
        <img src={logo} alt="Logo" className='w-32' />
      </div>
      <nav>
        <ul className="grid grid-cols-5">
          <li><a className='hover:text-pink' href="">Home</a></li>
          <li><a className='hover:text-pink' href="">Pages</a></li>
          <li><a className='hover:text-pink' href="">Products</a></li>
          <li><a className='hover:text-pink' href="">Shop</a></li>
          <li><a className='hover:text-pink' href="">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar