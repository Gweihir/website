import React, { useState } from "react"

import Image, { StaticImageData } from "next/image"
import Overview from "../public/Images/gweihir_overview_transparency.png"
import Bird from "/public/Images/bird.png"
import Link from "/public/Images/Chainlink_MJ_Icon_For_Web.png"
import Eth from "/public/Images/193-1936896_bitseven-ethereum-balance-blue-ethereum-logo.png"

const techArray = [
  {
    title: `Gweihir`,
    body: `Gweihir is a Chainlink node that is configured to bridge the Kusama and Ethereum networks. This means that it enables developers to connect smart contracts on the Kusama network with data and resources on the Ethereum network, and vice versa. Gweihir uses Chainlink's decentralized oracle network to securely and reliably transmit data between the two networks. In this way, Gweihir provides developers with a powerful tool for creating cross-chain applications that can take advantage of the unique features and capabilities of both Kusama and Ethereum.`,
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
        className={`${borderColor} ${backgroundColor} ${width} ${height} w-full flex flex-wrap justify-start xl:m-10 lg:m-4 m-2 p-6 rounded-md border-2`}
      >
        <Image src={littleImage} width={50} height={50} alt='blob' className='pb-4' />
        <h1 className={`${titleTextColor} text-left text-3xl md:text-xl lg:text-2xl pl-6 pt-2`}>
          {title}
        </h1>
        <div className=''>
          <p className={`${bodyTextColor} text-left ${!readMore && "sm:line-clamp-12"}`}>{body}</p>
          <button className='text-accent invisible md:visible' onClick={handleReadMore}>
            {!readMore ? "-read more-" : "-close-"}
          </button>
        </div>
      </div>
    </div>
  )
}

type Props = {}

export default function Technologies(props: Props) {
  return (
    <main className=''>
      <div className='xl:bg-slate-700 bg-slate-800 flex justify-center'>
        <div id='technologies' className='flex flex-wrap justify-center '>
          <div className='xl:bg-slate-800 bg-slate-700 p-3 md:p-6 lg:p-10 md:mt-14 drop-shadow-[0_5px_5px_rgba(25,25,25,0.5)]'>
            <Image
              src={Overview}
              width={1200}
              alt='Image of Gweihir Interacting with Ethereum via Chainlink'
              className='md:pb-10'
            />
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
    </main>
  )
}
