import React from "react"

type Props = {}

function Footer({}: Props) {
  return (
    <footer className='bg-gray-800 py-4 px-6 text-center text-white'>
      Copyright © {new Date().getFullYear()} My Dark Themed Website
    </footer>
  )
}

export default Footer
