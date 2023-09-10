'use client'
import React from 'react'
import SelectElement from '../Form_Elements/SelectElement'
import NavItems from './NavItems'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const loginRegisterPath =
  pathname.includes("login") || pathname.includes("sign-up");
  return (
    <nav className={`h-16 ${loginRegisterPath ? "hidden" : 'flex'} items-center justify-between px-10 bg-blue-700 sticky top-0`}>
     <SelectElement />
     <NavItems />
    </nav>
  )
}

export default Navbar
