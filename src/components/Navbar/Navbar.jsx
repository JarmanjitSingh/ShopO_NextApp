import React from 'react'
import SelectElement from '../Form_Elements/SelectElement'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <nav className='h-16 flex items-center justify-between px-10 bg-blue-700 sticky top-0'>
     <SelectElement />
     <NavItems />
    </nav>
  )
}

export default Navbar
