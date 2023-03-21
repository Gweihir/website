import React from "react"
import Card from "@/original_components/Card"
import Image from "next/image"
import DeskGuy from "../public/Images/Guy_Desk_02.png"
import DigitalContract from "../public/Images/Digi_Con_02.png"
import Birdie from "../public/Images/Birdie_02.png"
import Servers from "../public/Images/Servers_04.png"

type Props = {}

export default function UsersPage(props: Props) {
  return (
    <section className='text-center'>
      <div className='flex flex-wrap justify-evenly pt-12 sm:px-32'>
        <h1 className='font-lg w-full text-accent font-semibold text-center mb-8 text-3xl'>
          Users
        </h1>
        <div className='w-full flex flex-row justify-around'>
          <div>
            <div className='flex flex-col justify-center mt-4'>
              <h1 className='text-accent font-semibold text-lg'>Kusama Users</h1>
              <Image
                src={Birdie}
                height={200}
                alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                className='md:pb-10'
              />
            </div>
          </div>
          <div>
            <Image
              src={DeskGuy}
              height={300}
              alt='Image of Gweihir Interacting with Ethereum via Chainlink'
              className='md:pb-10'
            />
          </div>
          <div>
            <div className='flex flex-col justify-center mt-4'>
              <h1 className='text-accent font-semibold text-lg'>Smart Contract Devs</h1>
              <Image
                src={DigitalContract}
                height={200}
                alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                className='md:pb-10'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center mt-4'>
          <h1 className='text-accent font-semibold text-lg'>Node Operators</h1>
          <Image
            src={Servers}
            height={200}
            alt='Image of Gweihir Interacting with Ethereum via Chainlink'
            className='md:pb-10 mt-4'
          />
        </div>
      </div>
    </section>
  )
}
