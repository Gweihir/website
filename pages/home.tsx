import React from "react"
import Button from "@/original_components/Button"
import Image from "next/image"
import lightStripedPolygon from "../public/Images/bg_striped_polygon_lighter.png"

type Props = {}

export default function HomePage(props: Props) {
  return (
    <main className='bg-slate-800 flex flex-col xl:min-h-screen_88 lg:min-h-screen_80 md:min-h-screen_70 sm:min-h-screen_40 min-h-screen_40 md:mt-20'>
      <Image
        width={1100}
        src={lightStripedPolygon}
        alt='Image'
        className='invisible mt-20 md:visible mb-4 mr-52 absolute top-24 left-0 drop-shadow-[0_5px_5px_rgba(25,25,25,0.5)]'
      />

      <div className='flex-1 md:pt-8 pb-8 sm:px-8 px-0 relative animate-fade_in'>
        <section
          id='Home'
          className='mt-8 sm:mt-10 md:mt-32 lg:mt-44 md:pr-24 ml-0 md:ml-7 lg:ml-18 xl:ml-36 md:w-2/3 xl:w-5/12 w-full'
        >
          <h1 className='text-white text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-left pl-4 pb-4 sm:pb-0'>
            Bridge Kusama Data
            <br />
            to Ethereum
          </h1>

          <p className='text-gray-400 pl-4 text:lg sm:text-xl'>
            Gweihir provides smart contracts the ability to bridge Kusama Data to the Ethereum
            blockchain via the Chainlink network using a secure process.
          </p>
          <div className='w-full flex flex-row justify-center md:justify-start pt-5 sm:pt-0'>
            {/* <Button 
              buttonText="Try Testnet dApp"
              onClick={() => {
                window.open("https://gweihir.app")
              }}
            /> */}

            <button
              onClick={() => {
                window.open("https://gweihir.app")
              }}
              className='px-4 py-2 mt-6 md:ml-9 font-medium cursor-pointer text-xl rounded-full text-slate-900 hover:from-secondary active:to-accentMono active:from-secondary hover:to-thirdinary bg-gradient-to-br from-primary to-accent transition duration-500'
            >
              <p>Try Testnet dApp</p>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
