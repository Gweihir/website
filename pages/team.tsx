import React, { useState, MouseEventHandler } from "react"
import Image from "next/image"
import AdamHeadshot from "../public/Images/Team/AdamHeadshot.png"
import SpencerHeadshot from "../public/Images/Team/SpencerHeadshot.png"
import SpiessHeadshot from "../public/Images/Team/SpiessHeadshot.png"
import KeenanHeadshot from "../public/Images/Team/KeenanHeadshot.png"
import AndreaHeadshot from "../public/Images/Team/AndreaHeadshot.png"
import TylerHeadshot from "../public/Images/Team/TylerHeadshot.png"

const TeamArray = [
  {
    name: `Adam Steeber`,
    title: "Founder",
    bio: "Active member in the Kusama ecosystem since April of 2021 with a bachelor's degree in economics. Adam runs a validator node on Kusama and is interested in realizing the Web3 paradigm. His focuses are interoperability and solving real-world problems using blockchain technology.",
    headshot: AdamHeadshot,
  },

  {
    name: `Spencer Brown`,
    title: "Lead Developer & Project Engineer",
    bio: "Software engineer specializing in full-stack web development with a bachelor's degree in software engineering from Arizona State University.",
    headshot: SpencerHeadshot,
  },
  {
    name: `Nick Spiess`,
    title: "Marketing Coordinator",
    bio: "Software developer active in the blockchain ecosystem since 2017. Nick is passionate about Web3 and the potential it holds to create a more equitable world.",
    headshot: SpiessHeadshot,
  },
  {
    name: `Keenan Reed`,
    title: "Associate Developer & Frontend Director",
    bio: "Frontend web developer with a background in writing, editing, and visual design. Recently, Keenan's focus has been shifting toward dApps and the Web3 ecosystem.",
    headshot: KeenanHeadshot,
  },
  {
    name: `Andrea Vendrame`,
    title: "Full-stack dApp & Solidity developer",
    bio: "Passionate software engineer specializing in full-stack web development with a master's degree in Design and Development of Software Systems from the University of Udine (Italy).",
    headshot: AndreaHeadshot,
  },
  {
    name: `Tyler`,
    title: "Consultation & Review",
    bio: "Self-taught and self-motivated software developer. Tyler helps design and develop custom software solutions tailored specifically to the needs of his clients.",
    headshot: TylerHeadshot,
  },
]

type Props = {}

export default function Team(props: Props) {
  const [readMore, setReadMore] = useState(Array(TeamArray.length).fill(true))

  const handleReadMore: MouseEventHandler<HTMLButtonElement> = (event) => {
    const index = Number(event.currentTarget.getAttribute("data-index"))
    setReadMore((prevState) => {
      const newState = [...prevState]
      newState[index] = !newState[index]
      return newState
    })
  }

  return (
    <main id='team' className='bg-slate-700 rounded-md mx-0 xl:mx-20'>
      <div className='sm:w-4/5 w-full mx-auto mt-20 pt-4 pb-0'>
        <h1 className='font-semibold text-3xl text-center mt-6 text-accent'>Team</h1>
        <div id='team' className='flex flex-wrap justify-center pt-10 pb-12'>
          {TeamArray.map((team, index) => (
            <div
              key={index}
              className='h-1/2 sm:w-fit w-full m-2 px-6 pt-6 pb-4 border-2 rounded-md border-slate-600 bg-slate-800'
            >
              <div className='mb-4 flex items-center'>
                <Image src={team.headshot} alt='A face' width={60} height={60} className='ml-0' />
                <div className='flex flex-col'>
                  <h1 className='ml-6 text-accent text-lg font-semibold'>{team.name}</h1>
                  <h1 className='ml-6 text-accent text-sm font-light w-40 h-10'>{team.title}</h1>
                </div>
              </div>
              <p
                className={`mt-4 text-gray-300 sm:w-80 w-full ${readMore[index] && "line-clamp-2"}`}
              >
                {team.bio}
              </p>
              <button className='text-accent pt-1' onClick={handleReadMore} data-index={index}>
                {readMore[index] ? "-read more-" : "-close-"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
