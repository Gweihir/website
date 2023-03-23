import React from "react"
import Card from "@/original_components/Card"
import Image from "next/image"
import DeskGuy from "../public/Images/Guy_Desk_02.png"
import DigitalContract from "../public/Images/Digi_Con_02.png"
import Birdie from "../public/Images/Birdie_02.png"
import Servers from "../public/Images/Servers_04.png"

type Props = {}

export default function UsersPageTwo(props: Props) {
  return (
    <section className='text-center flex flex-wrap justify-center w-full'>
      <div className='flex flex-wrap justify-evenly pt-12 sm:px-32 w-3/4'>
        <h1 className='font-lg w-full text-accent font-semibold text-center mb-8 text-3xl'>
          Our Users Ver II
        </h1>

        {/* Smart Contract Devs */}
        <div className='flex flex-row items-center px-10 justify-center mt-4 text-left'>
          <div className='flex flex-row items-center'>
            <div className='mr-4'>
              <p className='text-white p-4 bg-slate-700 rounded-md'>
                Gweihir offers novel data-bridging services to smart contract developers. By running
                a Gweihir node, operators can enable smart contracts to access real-time, reliable
                data from the Kusama blockchain. It is designed to be user-friendly and easy to
                integrate with existing infrastructure, substantially decreasing the overall
                investment of time and resources spent learning new technologies or systems.
                Additionally, Gweihir&apos;s emphasis on security and end-to-end encryption can help
                node operators build trust with their clients and ensure that the data they provide
                is reliable and accurate.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center min-w-fit'>
              <h1
                className='text-accent font-semibold text-lg w-full mx-auto pb-4 pt-4'
                style={{ textAlign: "center" }}
              >
                ~ Smart Contract Devs ~
              </h1>
              <div>
                <Image
                  src={DigitalContract}
                  height={200}
                  alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                  className='md:pb-10'
                />
              </div>
            </div>
          </div>
        </div>
        {/* Node Operators */}
        <div className='flex flex-row items-center px-10 justify-center mt-4 text-left'>
          <div className='flex flex-row items-center'>
            <div className='flex flex-col items-center justify-center min-w-fit'>
              <h1
                className='text-accent font-semibold text-lg w-full mx-auto pb-4'
                style={{ textAlign: "center" }}
              >
                ~ Node Operators ~
              </h1>
              <div>
                <Image
                  src={Servers}
                  height={200}
                  alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                  className='md:pb-10'
                />
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-white p-4 bg-slate-700 rounded-md'>
                Node operators are well acquainted with the benefits of providing reliable
                infrastructure to decentralized applications. By implementing Gweihir, you are
                offering a secure and efficient way for developers to connect their Kusama-based
                smart contracts to the Ethereum network, all while leveraging the power of
                Chainlink&apos;s decentralized oracle network. This will allow your clientele to
                build more sophisticated and reliable smart contracts. As an added incentive, by
                participating in the Chainlink network as a Gweihir node operator, you can earn
                rewards for supplying accurate and timely data for smart contracts.
              </p>
            </div>
          </div>
        </div>
        {/* Kusama Users */}
        <div className='flex flex-row items-center px-10 justify-center mt-4 text-left'>
          <div className='flex flex-row items-center'>
            <div className='mr-4'>
              <p className='text-white p-4 bg-slate-700  rounded-md'>
                Gweihir provides a valuable opportunity for Kusama users to expand their
                productivity and impact beyond the Kusama ecosystem and into the Ethereum
                blockchain. This impact is not limited to financial gains and does not require the
                use of a centralized exchange. For founders launching parachains on Kusama, Gweihir
                can be particularly valuable. They can associate their substrate accounts with
                Ethereum accounts and offer more robust rewards to their community. This can
                incentivize more participation and engagement from users, and ultimately help the
                founders achieve their goals faster and more effectively.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center min-w-fit'>
              <h1
                className='text-accent font-semibold text-lg w-full mx-auto pb-4'
                style={{ textAlign: "center" }}
              >
                ~ Kusama Users ~
              </h1>
              <div>
                <Image
                  src={Birdie}
                  height={200}
                  alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                  className='md:pb-10'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
