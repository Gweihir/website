import Button from "@/original_components/Button"
import Hexagon from "@/original_components/Hexagon/Hexagon"
import Image from "next/image"
import React from "react"
import gem from "../public/Images/bg_gemstone.png"
import blurGem from "../public/Images/bg_gausian_radial_gem.png"
import polygon from "../public/Images/bg_polygon.png"
import neonBar from "../public/Images/neon_bar.png"
import stripedPolygon from "../public/Images/bg_striped_polygon.png"
import fuchsiaBlob from "../public/Images/fuchsia_blob.png"
import fuchsiaBlobTwo from "../public/Images/fuchsia_blob_two.png"
import peachBlob from "../public/Images/peach_blob.png"
import epicContent from "../public/Images/epic_content.png"
type Props = {}

export default function HomePage(props: Props) {
  return (
    <div className='bg-gray-900 min-h-screen flex flex-col'>
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
        src={stripedPolygon}
        alt='Image'
        className='invisible mt-20 md:visible mb-4 mr-52 absolute top-24 left-0'
      />
      <main className='flex-1 py-8 px-6 relative'>
        <section id='about' className='mt-44 sm:ml-0 md:ml-18 lg:ml-36 md:w-2/3 lg:w-1/3 w-full'>
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
