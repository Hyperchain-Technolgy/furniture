import SearchBar from '../SearchBar'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import TopNavigation from './TopNavigation'


const currencies = ['INR', 'CAD', 'USD', 'AUD', 'EUR', 'GBP']

const navigation = {
  categories: [
    {
      name: 'Categories',
      featured: [
        {
          id: 1,
          title: 'Armchair with Head Rester',
          imageSrc: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/armchair.jpg',
        }, {
          id: 2,
          title: 'Beige Living Room Sofa',
          imageSrc: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/sofa.jpg',
        }, {
          id: 3,
          title: 'Classic Wooden Table',
          imageSrc: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/table.jpg',
        }, {
          id: 4,
          title: 'Computer Table with Office Chair',
          imageSrc: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2017/12/office-table.jpg',
        },
      ],
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <MobileMenu open={open} setOpen={setOpen} navigation={navigation} classNames={classNames} currencies={currencies} />
      <TopNavigation navigation={navigation} setOpen={setOpen} classNames={classNames} currencies={currencies} />
    </>
  )
}

export default Navbar