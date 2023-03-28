import React from "react"
import Image from "next/image"
import EpicContent from "../public/Images/epic_content.png"
import Chainlink from "../public/Images/Chainlink_MJ_Icon_For_Web.png"
import Kusama from "../public/Images/kusama_svg.svg"
import Eth from "../public/Images/eth.png"
import Octocat from "../public/Images/github-mark-accent.png"
import Link from "next/link"

type Props = {}

export default function Resources(props: Props) {
  return (
    <section id='resources' className='text-center bg-slate-700 max-w-screen'>
      <h1 className='w-full text-accent text-center mb-1 sm:font-semibold text-2xl sm:text-3xl pt-7 sm:pt-10'>
        Resources
      </h1>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between xl:px-32 mx-auto w-full'>
          <div className='w-1/4 rounded-mds my-6 flex items-center flex-col space-y-6'>
            <div className='flex items-center'>
              <h1 className='text-accent text-start lg:text-3xl md:text-xl sm:text-md text-sm font-normal lg:pr-3 md:pr-2 pr-1'>
                Gweihir
              </h1>
              <Image
                src={Octocat}
                alt='GitHub Icon'
                className='object-contain h-4 w-4 lg:h-8 md:h-6 sm:h-4 lg:w-8 md:w-6 sm:w-4'
              />
            </div>

            <Link href='https://github.com/gweihir' target='_blank'>
              <Image
                src={EpicContent}
                height={75}
                alt='Gweihir Icon'
                className='pb-5 cursor-pointer hover:animate-bounce'
              />
            </Link>
          </div>
          <div className='w-1/4 rounded-mds my-6 flex items-center flex-col space-y-6'>
            <h1 className='text-accent text-start lg:text-3xl md:text-xl sm:text-md text-sm font-normal'>
              Chainlink
            </h1>
            <Link href='https://chain.link/' target='_blank'>
              <Image
                src={Chainlink}
                height={75}
                alt='Chainlink Icon'
                className='pb-5 cursor-pointer hover:animate-bounce'
              />
            </Link>
          </div>
          <div className=' w-1/4 rounded-mds my-6 flex items-center flex-col space-y-6'>
            <h1 className='text-accent text-start lg:text-3xl md:text-xl sm:text-md text-sm font-normal'>
              Kusama
            </h1>
            <Link href='https://kusama.network/' target='_blank'>
              <Image
                src={Kusama}
                height={75}
                alt='Kusama Icon'
                className='pb-5 cursor-pointer hover:animate-bounce'
              />
            </Link>
          </div>
          <div className=' w-1/4 rounded-mds my-6 flex items-center flex-col space-y-6'>
            <h1 className='text-accent text-start lg:text-3xl md:text-xl sm:text-md text-sm font-normal'>
              Ethereum
            </h1>
            <Link href='https://ethereum.org/en/' target='_blank'>
              <Image
                src={Eth}
                height={75}
                alt='GitHub Icon'
                className=' pb-5 cursor-pointer hover:animate-bounce'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
