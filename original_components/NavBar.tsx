import React from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/Images/logo_2_Layer.png"

const NavBar = () => {
  return (
    <nav className='bg-gray-800 z-50'>
      <div className='container mx-auto px-5 py-4 flex items-center justify-between text-white'>
        <Link
          href='/'
          className='hover:text-accent container flex items-center justify-left max-w-max'
        >
          <Image
            className='hover:animate-pulse'
            src={Logo}
            alt='Project Gweihir Logo: The silhouette of a bird within a thick blue hexagon.'
            width={48}
            height={48}
          />
          <div className='text-lg font-medium pl-3'>Gweihir</div>
        </Link>
        <div className='hidden md:block items-center justify-right max-w-max sm:visible'>
          <Link className='lg:ml-10 md:ml-5 hover:text-accent' href='/technologies'>
            Technologies
          </Link>
          <Link className='lg:ml-10 md:ml-5 hover:text-accent' href='/ourusers'>
            Our Users
          </Link>
          <Link className='lg:ml-10 md:ml-5 hover:text-accent' href='/documentation'>
            Documentation
          </Link>
          <Link className='lg:ml-10 md:ml-5 hover:text-accent' href='/faq'>
            FAQ
          </Link>
          <Link className='lg:ml-10 md:ml-5 hover:text-accent' href='/team'>
            Team
          </Link>
          <Link className='lg:ml-10 md:ml-5 hover:text-accent' href='/contact'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
