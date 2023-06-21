import Image from "next/image"
import React from "react"
import EpicContent from "../public/Images/epic_content.png"

const BirdHead: React.FC = () => (
  <Image
    width={500}
    src={EpicContent}
    alt='Image'
    className='z-10 md:mb-4 w-1/2 mx-auto md:w-1/3 xl:w-[31.25rem] xl:mr-44 md:mr-6 mt-[7.75rem] md:mt-60 md:absolute lg:top-10 top-10 xl:top-0 right-0 opacity-100 animate-fade_in hover:scale-105 transition duration-500'
  />
)

export default BirdHead
