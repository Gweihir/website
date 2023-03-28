import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/Images/logo_2_Layer.png"
import { FaBars, FaTimes } from "react-icons/fa"
import { Menu, Transition } from "@headlessui/react"

const links = [
  { href: "#technologies", label: "Technologies" },
  { href: "#clientele", label: "Clientele" },
  { href: "#resources", label: "Resources" },
  // { href: "#roadMap", label: "Road Map" },
  // { href: "#faq", label: "FAQ" },
  // { href: "#team", label: "Team" },
  { href: "https://github.com/Gweihir", label: "Contact" },
]
{
  ;("ml-auto lg:block items-center justify-right max-w-max lg:mr-4 xl:mr-8")
}
const HamburgerMenu = () => {
  return (
    <div className='relative right-0'>
      <Menu>
        <div className='flex items-center'>
          <Menu.Button
            className={
              "absolute right-0 w-10 h-10 border-2 cursor-pointer hover:text-accent hover:border-accent border-slate-400 px-2 py-2 text-secondary rounded-full z-50"
            }
            as={FaBars}
          ></Menu.Button>
        </div>
        <Transition
          enter='transition duration-300 transform ease-out'
          enterFrom='opacity-0 translate-y-2 scale-95'
          enterTo='opacity-100 translate-y-0 scale-100'
          leave='transition duration-200 transform ease-in'
          leaveFrom='opacity-100 translate-y-0 scale-100'
          leaveTo='opacity-0 translate-y-2 scale-95'
        >
          <Menu.Items className='absolute outline-none -right-12 top-10 mx-6 pl-2 pr-4 py-2 bg-slate-700 border-slate-600 border-x-2 border-b-2'>
            {links.map(({ href, label }) => (
              <Menu.Item key={href}>
                {({ active }) => (
                  <a
                    className={`block w-full py-2 px-4 text-sm lg:text-base ${
                      active ? "text-accent bg-slate-800" : ""
                    }`}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {label}
                  </a>
                )}
              </Menu.Item>
            ))}
            {links.map(({ href, label }) => (
              <Menu.Item key={href}>
                {({ active }) => (
                  <a
                    className={`block w-full py-2 px-4 text-sm lg:text-base ${
                      active ? "text-accent bg-slate-800" : ""
                    }`}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

interface NavBarProps {
  className?: string
}
export default function NavBar({ className }: NavBarProps): JSX.Element {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    let prevScrollpos = window.pageYOffset
    const navbar = navbarRef.current
    if (navbar !== null) {
      window.onscroll = function () {
        let currentScrollPos = window.pageYOffset
        if (prevScrollpos > currentScrollPos) {
          setIsVisible(true)
          navbar.style.transform = "translateY(0)"
        } else {
          setIsVisible(false)
          navbar.style.transform = "translateY(-100%)"
        }
        prevScrollpos = currentScrollPos
      }
    }
  }, [navbarRef])

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <nav
      className={`navbar bg-slate-700 drop-shadow-[0_5px_5px_rgba(25,25,25,0.5)] fixed top-0 w-full transition duration-500 ease-in-out transform ${
        isVisible ? "" : "-translate-y-full"
      } ${className}`}
      id={"navbar"}
      ref={navbarRef}
    >
      <div className='px-5 py-4 flex items-center justify-between text-white'>
        <div className='flex items-center'>
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
        {!isMobile ? (
          <div className='hidden ml-auto md:block items-center justify-right max-w-max lg:mr-4 xl:mr-8 md:text-sm lg:text-base'>
            {links.map(({ href, label }) => (
              <a
                className='lg:ml-10 md:ml-5 hover:text-accent'
                href={href}
                key={href}
                target='_blank'
                rel='noopener noreferrer'
              >
                {label}
              </a>
            ))}
          </div>
        ) : (
          <HamburgerMenu />
        )}
      </div>
    </nav>
  )
}
