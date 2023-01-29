import React from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/Images/logo_2_Layer.png"

const NavBar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='container mx-auto px-5 py-4 flex items-center justify-between text-white'>
        <Link href='/' className='container flex items-center justify-left max-w-max'>
          <Image
            src={Logo}
            alt='Project Gweihir Logo: The silhouette of a bird within a thick blue hexagon.'
            width={48}
            height={48}
          />
          <div className='text-lg font-medium pl-3'>Gweihir</div>
        </Link>
        <div className='hidden md:block items-center justify-right max-w-max sm:visible'>
          <Link className='lg:ml-10 md:ml-5 hover:text-gray-500' href='/technologies'>
            Technologies
          </Link>
          <Link className='lg:ml-10 md:ml-5 hover:text-gray-500' href='/idealusers'>
            Ideal Users
          </Link>
          <Link className='lg:ml-10 md:ml-5 hover:text-gray-500' href='/documentation'>
            Documentation
          </Link>
          <Link className='lg:ml-10 md:ml-5 hover:text-gray-500' href='/faq'>
            FAQ
          </Link>
          <Link className='lg:ml-10 md:ml-5 hover:text-gray-500' href='/team'>
            Team
          </Link>
          <Link className='lg:ml-10 md:ml-5 hover:text-gray-500' href='/contact'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
