import React from "react"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className='bg-blue-500'>
      <div className='container mx-auto px-6 py-2 flex items-center justify-between text-white'>
        <Link href='/' className='text-lg font-medium'>
          Your Website
        </Link>
        <div className='hidden md:block'>
          <Link href='/about' className='ml-4 hover:text-blue-200'>
            About
          </Link>
          <Link href='/services' className='ml-4 hover:text-blue-200'>
            Services
          </Link>
          <Link href='/contact' className='ml-4 hover:text-blue-200'>
            Contact
          </Link>
          <Link href='/blog' className='ml-4 hover:text-blue-200'>
            Blog
          </Link>
          <Link href='/login' className='ml-4 hover:text-blue-200'>
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
