import React from "react"
import Button from "@/original_components/Button"
import Image from "next/image"
import lightStripedPolygon from "../public/Images/bg_striped_polygon_lighter.png"
import epicContent from "../public/Images/epic_content.png"

type Props = {}

export default function HomePage(props: Props) {
  return (
    <main className='bg-slate-800 flex flex-col xl:min-h-screen_88 lg:min-h-screen_80 md:min-h-screen_70 sm:min-h-screen_40 min-h-screen_88 sm:mt-20 mt-16'>
      <Image
        width={1100}
        src={lightStripedPolygon}
        alt='Image'
        className='invisible mt-20 md:visible mb-4 mr-52 absolute top-24 left-0 drop-shadow-[0_5px_5px_rgba(25,25,25,0.5)]'
      />
      <Image
        width={500}
        src={epicContent}
        alt='Image'
        className='invisible lg:visible mb-4 lg:w-1/3 xl:mr-44 lg:mr-6 mt-60 absolute lg:top-10 md:top-56 top-10 xl:top-0 right-0 opacity-100 animate-fade_in'
      />
      <div className='flex-1 py-8 px-6 relative'>
        <section
          id='Home'
          className='mt-10 md:mt-44 sm:pr-24 ml-0 md:ml-7 lg:ml-18 xl:ml-36 lg:w-2/3 xl:w-5/12  w-full'
        >
          <h1 className='text-white text-2xl sm:text-4xl font-medium mb-4 text-left pl-4 pb-4 sm:pb-0'>
            Bridge Kusama Data
            <br />
            to Ethereum
          </h1>

          <p className='text-gray-400 pl-4 text:lg sm:text-xl'>
            Gweihir provides smart contracts the ability to bridge Kusama Data to the Ethereum
            blockchain via the Chainlink network using a secure process.
          </p>
          <div className='ml-2 mt-5'>
            <Button
              onClick={() => {
                window.innerWidth > 768
                  ? window.open("https://github.com/Gweihir")
                  : (window.location.href = "https://github.com/Gweihir")
              }}
              buttonText={"Contact us"}
              className={"mx-2"}
            />

            <Button
              onClick={() => {
                window.open("https://github.com/Gweihir")
              }}
              buttonText={"Get Started"}
              className={"mx-2"}
              disabled={true}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
