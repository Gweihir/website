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
    <section id='users' className='text-center'>
      <div className='flex flex-wrap justify-evenly pt-12 pb-20 sm:px-32'>
        <h1 className='font-lg w-full text-accent font-semibold text-center mb-8 text-3xl pb-8'>
          Our Users
        </h1>
        <div className='w-full flex flex-row justify-items-between mt-11'>
          {/* Kusama Users */}
          <div className='flex flex-row justify-center mt-4 w-1/3 text-left'>
            <div className='w-full'>
              <div className='mx-auto'>
                <h1 className='text-accent font-semibold text-lg text-center pb-7'>
                  ~ Node Operators ~
                </h1>
                <Image
                  src={Servers}
                  height={200}
                  alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                  className='md:pb-10 mx-auto'
                />
              </div>
              <p className='text-white text-left px-4'>
                Node operators know the benefits of providing reliable infrastructure to
                decentralized applications. By implementing Gweihir, you are offering a secure and
                efficient way for developers to connect their Kusama-based smart contracts to the
                Ethereum network, all while leveraging the power of Chainlink&apos;s decentralized
                oracle network. This will allow your clientele to build more sophisticated and
                reliable smart contracts. As an added incentive, by participating in the Chainlink
                network as a Gweihir node operator, you can earn rewards for supplying accurate and
                timely data for smart contracts.
              </p>
            </div>
          </div>
          {/* DeskGuy */}
          <div className='flex flex-row justify-center w-1/3 text-left -mt-10'>
            <div>
              <Image
                src={DeskGuy}
                height={400}
                alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                className='md:pb-10 mx-auto'
              />
              <div className='text-white bg-slate-700 rounded-md mx-4 p-6'>
                {" "}
                Gweihir&apos;s services can benefit founders launching parachains on Kusama by
                allowing them to associate their substrate accounts with Ethereum accounts and offer
                more robust rewards to their community, driving innovation, collaboration, and
                growth in the Kusama and Ethereum ecosystems.
              </div>
            </div>
          </div>
          {/* Smart Contract Devs */}
          <div className='flex flex-row justify-center mt-4 w-1/3 text-left'>
            <div>
              <h1 className='text-accent font-semibold text-lg text-center pb-7'>
                ~ Smart Contract Devs ~
              </h1>
              <Image
                src={DigitalContract}
                height={200}
                alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                className='md:pb-10 mx-auto'
              />
              <p className='text-white text-left px-4'>
                Gweihir offers novel data-bridging services to smart contract developers. By running
                a Gweihir node, you are allowing smart contracts access to real-time, reliable data
                from the Kusama blockchain. It is designed to be user-friendly and easy to integrate
                with existing infrastructure, substantially decreasing the overall investment of
                time and resources spent learning new technologies or systems. Additionally,
                Gweihir&apos;s emphasis on security and end-to-end encryption can help node
                operators build trust with their clients and ensure that the data they provide is
                reliable and accurate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
