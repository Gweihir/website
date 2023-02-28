import React, { useState } from "react"
import { useButton, useMenu, useMenuItem } from "react-aria"
import { useFocusRing } from "react-aria"
import { Menu } from "@headlessui/react"

interface HamburgerMenuProps {
  label?: string
  href?: string
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = (label, href) => {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <Menu>
      <Menu.Button className={"bg-slate-200 w-6 h-6"}>More</Menu.Button>
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
    </Menu>
  )
}
