import React, { useState, useEffect } from "react"

import Image from "next/image"
import Overview from "../public/Images/gweihir_overview_transparency.png"

const TechCard = () => {
  return (
    <div className=''>
      <div className=''></div>
    </div>
  )
}

type Props = {}

export default function Technologies(props: Props) {
  return (
    <div className='xl:bg-slate-700 bg-slate-800 flex justify-center'>
      <main>
        <div className='xl:bg-slate-800 bg-slate-700 p-3 md:p-6 lg:p-10 md:mt-14 mb-10 drop-shadow-[0_5px_5px_rgba(25,25,25,0.5)]'>
          {/* <div className='flex flex-row justify-between md:pl-10 md:pr-10 text-accent md:text-xl font-bold'>
            <div className=''>Gweihir!!</div>
            <div className=''>Chainlink</div>
            <div className=''>Ethereum</div>
          </div> */}
          <Image
            src={Overview}
            width={1200}
            alt='Image of Gweihir Interacting with Ethereum via Chainlink'
            className=''
          />
        </div>
      </main>
    </div>
  )
}

{
  /* <section className='text-center'>
  <div className='flex flex-wrap justify-evenly pt-12 sm:px-32'>
    <Card
      icon={
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='white'
          className='w-6 h-6'
        >
          <path d='M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z' />
          <path
            fillRule='evenodd'
            d='M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z'
            clipRule='evenodd'
          />
        </svg>
      }
      title='Hello World'
      body='Lorem Ipsum Maximus:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      backgroundColor='bg-slate-800'
      borderColor='border-accent'
      bodyTextColor='text-white'
      titleTextColor='text-gray-200'
      width='xl:w-1/5 md:w-1/3'
      height='h-1/3'
    />
    <Card
      icon={
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='white'
          className='w-6 h-6'
        >
          <path d='M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z' />
          <path
            fillRule='evenodd'
            d='M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z'
            clipRule='evenodd'
          />
        </svg>
      }
      title='Hello World'
      body='Lorem Ipsum Maximus:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      backgroundColor='bg-slate-800'
      borderColor='border-accent'
      bodyTextColor='text-white'
      titleTextColor='text-gray-200'
      width='xl:w-1/5 md:w-1/3'
      height='h-1/3'
    />
    <Card
      icon={
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='white'
          className='w-6 h-6'
        >
          <path d='M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z' />
          <path
            fillRule='evenodd'
            d='M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z'
            clipRule='evenodd'
          />
        </svg>
      }
      title='Hello World'
      body='Lorem Ipsum Maximus:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      backgroundColor='bg-slate-800'
      borderColor='border-accent'
      bodyTextColor='text-white'
      titleTextColor='text-gray-200'
      width='xl:w-1/5 md:w-1/3'
      height='h-1/3'
    />
    <Card
      icon={
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='white'
          className='w-6 h-6'
        >
          <path d='M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z' />
          <path
            fillRule='evenodd'
            d='M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z'
            clipRule='evenodd'
          />
        </svg>
      }
      title='Hello World'
      body='Lorem Ipsum Maximus:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      backgroundColor='bg-slate-800'
      borderColor='border-accent'
      bodyTextColor='text-white'
      titleTextColor='text-gray-200'
      width='xl:w-1/5 md:w-1/3'
      height='h-1/3'
    />
  </div>
</section> */
}
