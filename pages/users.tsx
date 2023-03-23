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
        <h1 className='font-lg w-full text-accent font-semibold text-center mb-8 text-3xl'>
          Our Users
        </h1>
        <div className='w-full flex xl:flex-row flex-col justify-items-between mt-11'>
          {/* Node Operators */}
          <div className='flex flex-row justify-center mt-10 xl:mt-52 xl:w-1/3 text-left order-2 xl:order-1'>
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
              <p className='text-white text-left px-8 pt-6 xl:pt-0'>
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
          <div className='flex flex-row justify-center xl:w-1/3 text-left -mt-10 order-1 xl:order-2'>
            <div>
              <Image
                src={DeskGuy}
                height={400}
                alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                className='md:pb-10 mx-auto'
              />

              {/* Kusama Users */}
              <div className='flex flex-row justify-center text-left order-2 xl:order-1'>
                <div className='w-full'>
                  <div className='mx-auto'>
                    <h1 className='text-accent font-semibold mt-10 xl:mt-0 text-lg text-center pb-7'>
                      ~ Kusama Users ~
                    </h1>
                    <Image
                      src={Birdie}
                      height={200}
                      alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                      className='md:pb-10 mx-auto'
                    />
                  </div>
                  <p className='text-white text-left px-8 pt-6 xl:pt-0'>
                    Gweihir provides a valuable opportunity for Kusama users to expand their
                    productivity and impact beyond the Kusama ecosystem and into the Ethereum
                    blockchain. This impact is not limited to financial gains and does not require
                    the use of a centralized exchange. For founders launching parachains on Kusama,
                    Gweihir can be particularly valuable. They can associate their substrate
                    accounts with Ethereum accounts and offer more robust rewards to their
                    community. This can incentivize more participation and engagement from users,
                    and ultimately help the founders achieve their goals faster and more
                    effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Contract Devs */}
          <div className='flex flex-row justify-center mt-10 xl:mt-52 xl:w-1/3 text-left order-3 xl:order-3'>
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
              <p className='text-white text-left px-8 pt-6 xl:pt-0'>
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
