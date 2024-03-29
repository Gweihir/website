import React, { useState } from "react"

import Image, { StaticImageData } from "next/image"
import Overview from "../public/Images/gweihir_overview_transparency.png"
import Bird from "/public/Images/bird.png"
import Link from "/public/Images/Chainlink_MJ_Icon_For_Web.png"
import Eth from "/public/Images/eth.png"

const techArray = [
  {
    title: `Kusama`,
    body: `Kusama is a decentralized blockchain network that offers a permissionless
    environment for developers to create and launch sharded blockchains that share
    Kusama's security. It operates on a proof-of-stake consensus mechanism and
    features a flexible upgrade process via open governance. KSM token holders
    decide the outcome of governance referenda making Kusama a community-driven
    protocol. Its architecture is similar to Polkadot, but Kusama has faster block
    times and its ecosystem encourages more experimental developments, making it
    Polkadot's "canary" network.`,
    littleImage: Bird,
  },
  {
    title: `Chainlink`,
    body: `Chainlink is an oracle network technology that provides blockchains the ability to fetch and utilize off-chain data in their respective ecosystems. "Off-chain data" is any data whose source comes from outside a blockchain's network. Chainlink node operators deploy "oracles" on their blockchains of choice and are rewarded by users that interact with those oracles. For example, if a developer wanted to create a smart contract on Ethereum where users can make bets on tomorrow's weather, they could utilize Accuweather's oracle to fetch weather data.`,
    littleImage: Link,
  },
  {
    title: `Ethereum`,
    body: `Ethereum is the world's largest proof-of-stake blockchain and runs on EVM. It allows developers to deploy their own smart contracts that can facilitate various token-based technologies. Innovations and standards on Ethereum are managed by Ethereum Improvement Proposals (EIPs) which contain technical specifications for community consideration. A successful EIP becomes an Ethereum Request for Comment (ERC) which serves as a standard of development. Essentially, Ethereum is an open-source technology with a community driven ecosystem of development standards.`,
    littleImage: Eth,
  },
]
interface TechCardProps {
  littleImage: StaticImageData
  title: string
  body: string
  backgroundColor: string
  borderColor: string
  bodyTextColor: string
  titleTextColor: string
  width: string
  height: string
}

const TechCard: React.FC<TechCardProps> = ({
  littleImage,
  title,
  body,
  backgroundColor,
  borderColor,
  bodyTextColor,
  titleTextColor,
  width,
  height,
}) => {
  const [readMore, setReadMore] = useState(false)

  const handleReadMore = () => {
    setReadMore(!readMore)
  }

  return (
    <div className='relative justify-center top-4 md:-top-10 lg:-top-24'>
      <div
        className={`${borderColor} ${backgroundColor} ${width} ${height} w-full flex flex-wrap justify-start xl:m-10 lg:m-4 m-2 px-8 pt-6 pb-2 rounded-md border-2`}
      >
        <Image src={littleImage} width={50} height={50} alt='blob' className='pb-4' />
        <h1
          className={`${titleTextColor} text-left text-2xl sm:text-2xl md:text-xl lg:text-3xl pl-6 pt-2`}
        >
          {title}
        </h1>
        <div>
          <p
            className={`${bodyTextColor} transform duration-300 text-left ${
              !readMore && "sm:line-clamp-12"
            }`}
          >
            {body}
          </p>
          <button className='text-accent invisible md:visible' onClick={handleReadMore}>
            {!readMore ? "- read more -" : "- read less -"}
          </button>
        </div>
      </div>
    </div>
  )
}

type Props = {}

export default function Technologies(props: Props) {
  return (
    <section id='technologies'>
      <div className='xl:bg-slate-700 bg-slate-800 flex justify-center'>
        <div>
          <div className='flex flex-wrap justify-center '>
            <div className='bg-slate-800 p-3 md:p-6 lg:p-10 md:mt-8 '>
              <h1 className='w-full text-accent text-center mb-6 sm:font-semibold text-2xl sm:text-3xl'>
                Technologies
              </h1>
              <Image
                src={Overview}
                width={1200}
                alt='Image of Kusama Interacting with Ethereum via Chainlink'
                className='md:pb-10'
              />
            </div>
          </div>{" "}
        </div>
      </div>
      <div className='xl:bg-slate-700 bg-slate-800 flex justify-center flex-col md:flex-row'>
        {techArray.map((tech, index) => (
          <TechCard
            key={index}
            title={tech.title}
            body={tech.body}
            littleImage={tech.littleImage}
            backgroundColor='xl:bg-slate-800 bg-slate-700'
            borderColor='xl:border-accent border-slate-800'
            bodyTextColor='text-gray-300'
            titleTextColor='text-accent'
            width='lg:w-80 w-auto'
            height='h-auto'
          />
        ))}
      </div>
    </section>
  )
}
