import Button from "@/original_components/Button"
import Hexagon from "@/original_components/Hexagon/Hexagon"
import React from "react"

type Props = {}

export default function HomePage(props: Props) {
  return (
    <div className='bg-gray-900 min-h-screen flex flex-col'>
      <div className='' />
      <main className='flex-1 py-8 px-6'>
        <section id='about' className='mt-8 sm:ml-0 md:ml-8 lg:ml-16 md:w-2/3 lg:w-1/3 w-full'>
          <h1 className='text-white text-4xl font-medium mb-4 text-left pl-4'>
            Build hybrid smart
            <br></br>contracts with Gweihir
          </h1>
          <p className='text-gray-500 pl-4 text-xl'>
            Gweihir gives blockchain developers an easy-to-use framework for writing hybrid smart
            contracts that connect to external resources by combining on-chain and off-chain
            computation.
          </p>
          <div className='ml-2 mt-5'>
            <Button
              onClick={() => {
                console.log("hit")
              }}
              buttonText={"Press me"}
              className={"mx-2"}
            />
            <Button
              onClick={() => {
                console.log("hit")
              }}
              buttonText={"Press me Hard"}
              className={"mx-2"}
            />
          </div>
        </section>
      </main>
    </div>
  )
}
