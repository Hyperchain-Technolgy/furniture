import { useState } from 'react'
import MobileMenu from './MobileMenu'
import TopNavigation from './TopNavigation'


const currencies = ['INR', 'CAD', 'USD', 'AUD', 'EUR', 'GBP']

const navigation = {
  office: [
    { name: 'Staff seating', href: '#' },
    { name: 'Director seating', href: '#' },
    { name: 'H.B. chair', href: '#' },
    { name: 'M.B. chair', href: '#' },
    { name: 'L.B. chair', href: '#' },
    { name: 'Sofa', href: '#' },
    { name: 'Conference seating', href: '#' },
    { name: 'Corner table', href: '#' },
    { name: 'Artifact', href: '#' },
    { name: 'Auditorium Seating', href: '#' },
  ],
  home: [
    { name: 'Living Room', href: '#' },
  ],
  art: [
    { name: 'Living Room', href: '#' },
  ],
  pages: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]
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