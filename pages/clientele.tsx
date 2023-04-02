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
    <section id='clientele' className='text-center'>
      <div className='flex flex-wrap justify-evenly pt-12 sm:px-32'>
        <h1 className='w-full text-accent text-center mb-8 sm:font-semibold text-2xl sm:text-3xl'>
          Our Clientele
        </h1>
        <div className='w-full flex xl:flex-row flex-col justify-items-between mt-11'>
          {/* Node Operators */}
          <div className='flex flex-row lg:mr-4 justify-center mt-10 xl:mt-52 xl:w-1/3 text-left order-2 xl:order-1'>
            <div className='w-full mx-2 sm:mx-0'>
              <h1 className='text-accent sm:font-semibold text-lg text-center pb-4'>
                ~ Node Operators ~
              </h1>
              <Image
                src={Servers}
                height={200}
                alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                className='xl:pb-10 mx-auto'
              />
              <p className='text-gray-300 text-left mt-6 p-8 xl:mt-0 bg-slate-700 rounded-md'>
                The importance of providing reliable infrastructure to decentralized applications
                cannot be understated. Node operators that implement Gweihir offer a secure and
                efficient way for developers to utilize Kusama data in their smart contracts on
                Ethereum, all while earning LINK for every query made to their Chainlink oracle.
                With Gweihir&apos;s powerful Helm chart, implementers can enjoy diversifying their
                infrastructure&apos;s functionality with ease.
              </p>
            </div>
          </div>
          {/* DeskGuy */}
          <div className='flex flex-row justify-center xl:w-1/3 text-left -mt-10 order-1 xl:order-2'>
            <div>
              <Image
                src={DeskGuy}
                height={400}
                alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                className='xl:pb-10 mx-auto'
              />

              {/* Kusama Users */}
              <div className='flex flex-row justify-center text-left order-2 xl:order-1'>
                <div className='w-full mx-2 sm:mx-0'>
                  <div className='mx-auto pt-5'>
                    <h1 className='text-accent sm:font-semibold mt-10 xl:mt-0 text-lg text-center pb-4'>
                      ~ Kusama Users ~
                    </h1>
                    <Image
                      src={Birdie}
                      height={200}
                      alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                      className='xl:pb-10 mx-auto'
                    />
                  </div>
                  <div className='text-center'>
                    <p className='text-gray-300 justify text-left mt-6 rounded-md bg-slate-700 p-8 xl:mt-0 xl:w-full lg:w-3/4 w-full mx-auto'>
                      Gweihir allows Kusama users the opportunity to expand their on-chain
                      productivity into the Ethereum ecosystem, providing limitless utility while
                      not relying on the use of centralized infrastructure. Gweihir is particularly
                      valuable to teams launching parachains on Kusama; it allows them to supplement
                      crowd-loan rewards with ERC-20 tokens on the Ethereum network by associating
                      users&apos; substrate accounts with their Ethereum accounts. This can boost
                      participation and engagement from users, ultimately helping parachain teams
                      achieve higher user adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Contract Devs */}
          <div className='flex flex-row lg:ml-4 justify-center mt-10 xl:mt-52 xl:w-1/3 text-left order-3 xl:order-3'>
            <div className='w-full mx-2 sm:mx-0'>
              <h1 className='text-accent sm:font-semibold text-lg text-center pb-4'>
                ~ Smart Contract Devs ~
              </h1>
              <Image
                src={DigitalContract}
                height={200}
                alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                className='xl:pb-10 mx-auto'
              />
              <p className='text-gray-300 text-left mt-6 rounded-md bg-slate-700 p-8 xl:mt-0'>
                Smart contract developers can benefit from Gweihir&apos;s ability to leverage
                Chainlink nodes, providing a secure and efficient method to access off-chain data
                from Kusama. By incorporating Gweihir oracles and adhering to GUPs, dApps can unlock
                new use cases and ensure trustworthy interactions with external data sources.
                Additionally, Gweihir&apos;s infrastructure offers scalability, flexibility, and
                low-latency for seamless integration with existing smart contract platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
