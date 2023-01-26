import React from "react"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='container mx-auto px-6 py-6 flex items-center justify-between text-white'>
        <Link className='text-lg font-medium' href='/'>
          Project Gweihir
        </Link>
        <div className='hidden md:block'>
          <Link className='ml-4 hover:text-gray-500' href='/about'>
            Technologies
          </Link>
          <Link className='ml-4 hover:text-gray-500' href='/services'>
            Ideal Users
          </Link>
          <Link className='ml-4 hover:text-gray-500' href='/contact'>
            Documentation
          </Link>
          <Link className='ml-4 hover:text-gray-500' href='/blog'>
            FAQ
          </Link>
          <Link className='ml-4 hover:text-gray-500' href='/login'>
            Team
          </Link>
          <Link className='ml-4 hover:text-gray-500' href='/login'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
