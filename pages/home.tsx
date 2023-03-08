import Button from "@/original_components/Button"
import Hexagon from "@/original_components/Hexagon/Hexagon"
import Image from "next/image"
import React from "react"
import gem from "../public/Images/bg_gemstone.png"
import blurGem from "../public/Images/bg_gausian_radial_gem.png"
import polygon from "../public/Images/bg_polygon.png"
import neonBar from "../public/Images/neon_bar.png"
import stripedPolygon from "../public/Images/bg_striped_polygon.png"
import lightStripedPolygon from "../public/Images/bg_striped_polygon_lighter.png"
import fuchsiaBlob from "../public/Images/fuchsia_blob.png"
import fuchsiaBlobTwo from "../public/Images/fuchsia_blob_two.png"
import peachBlob from "../public/Images/peach_blob.png"
import epicContent from "../public/Images/epic_content.png"
type Props = {}

export default function HomePage(props: Props) {
  return (
    <main className='bg-slate-800 flex flex-col xl:min-h-screen_90 lg:min-h-screen_80 md:min-h-screen_65 sm:min-h-screen_40 min-h-screen_10'>
      {/* <Image
        width={840}
        src={peachBlob}
        alt='Image'
        className='invisible lg:visible mt-20 mb-4 mr-8 absolute top-0 right-0 opacity-80 animate-fade_in'
      /> */}
      <Image
        width={500}
        src={epicContent}
        alt='Image'
        className='invisible lg:visible mb-4 lg:mr-52 mt-60 absolute top-0 right-0 opacity-100 animate-fade_in'
      />
      <Image
        width={1100}
        src={lightStripedPolygon}
        alt='Image'
        className='invisible mt-20 md:visible mb-4 mr-52 absolute top-24 left-0 drop-shadow-[0_5px_5px_rgba(25,25,25,0.5)]'
      />
      <div className='flex-1 py-8 px-6 relative'>
        <section
          id='Home'
          className='mt-10 md:mt-44 sm:pr-24 ml-0 md:ml-7 lg:ml-18 xl:ml-36 lg:w-2/3 xl:w-5/12 w-full'
        >
          <h1 className='text-white text-4xl font-medium mb-4 text-left pl-4'>
            Bridge Kusama Data
            <br />
            to the world with Gweihir
          </h1>

          <p className='text-gray-400 pl-4 text-xl'>
            Gweihir provides you with the the ability to bridge Kusama Data to the Ethereum
            blockchain via Chainlink nodes using a process that is secure end-to-end.
          </p>
          <div className='ml-2 mt-5'>
            <Button
              onClick={() => {
                console.log("hit")
              }}
              buttonText={"Contact us"}
              className={"mx-2"}
            />
            <Button
              onClick={() => {
                console.log("hit")
              }}
              buttonText={"Our GitHub"}
              className={"mx-2"}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
