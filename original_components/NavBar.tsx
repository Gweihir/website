import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/Images/logo_2_Layer.png"
import { FaBars, FaTimes } from "react-icons/fa"
import { Menu, Transition } from "@headlessui/react"

const links = [
  { href: "/technologies", label: "Technologies" },
  { href: "/ourusers", label: "Our Users" },
  { href: "/documentation", label: "Documentation" },
  { href: "/roadmap", label: "Road Map" },
  { href: "/faq", label: "FAQ" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
]

const HamburgerMenu = () => {
  return (
    <Menu>
      <Menu.Button
        className={
          "flex items-center justify-center w-10 h-10 border-2 cursor-pointer hover:text-accent hover:border-accent border-primary m-2 px-2 py-2 text-primary rounded-full"
        }
        as={FaBars}
      ></Menu.Button>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`} href='/account-settings'>
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`} href='/account-settings'>
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className='opacity-75'>Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const DesktopNavbar = () => {
  return (
    <div className='hidden ml-auto lg:block items-center justify-right max-w-max lg:mr-4 xl:mr-8'>
      {links.map(({ href, label }) => (
        <Link className='lg:ml-10 md:ml-5 hover:text-accent' href={href} key={href}>
          {label}
        </Link>
      ))}
    </div>
  )
}

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <nav className='bg-slate-700 drop-shadow-[0_5px_5px_rgba(25,25,25,0.5)]'>
      <div className='mr-auto px-5 py-4 flex items-center text-white'>
        <div className='lg:ml-2 xl:ml-6 md:ml-0'>
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
        </div>
        {isMobile ? <HamburgerMenu /> : <DesktopNavbar />}
      </div>
    </nav>
  )
}
export default NavBar
