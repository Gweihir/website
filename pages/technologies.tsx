import React from "react"

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
      <main id='technologies'>
        <div className='xl:bg-slate-800 bg-slate-700 p-3 md:p-6 lg:p-10 md:mt-14 mb-10 drop-shadow-[0_5px_5px_rgba(25,25,25,0.5)]'>
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
