import React from "react"

type Props = {}

export default function Technologies(props: Props) {
  return (
    <div className='bg-green-900 min-h-screen flex flex-col'>
      <main className='flex-1 py-8 px-6'>
        <section className='text-center'>
          <h1 className='text-white text-3xl font-medium'>Welcome to My Dark Themed Website</h1>
          <p className='text-gray-500'>A modern and sleek design for all your needs</p>
        </section>
        <section id='about' className='mt-8'>
          <h2 className='text-white text-2xl font-medium mb-4'>About Us</h2>
          <p className='text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vitae
            convallis malesuada, velit velit faucibus ipsum, a tristique augue massa quis arcu. Sed
            et risus quis odio tempor viverra.
          </p>
        </section>
      </main>
    </div>
  )
}
