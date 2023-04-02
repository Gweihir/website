import Card from "@/original_components/Card"
import React from "react"
import Image from "next/image"

const TeamArray = [
  {
    name: `Adam`,
    bio: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },

  {
    name: `Spencer`,
    bio: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    name: `Nick`,
    bio: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    name: `Keenan`,
    bio: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    name: `Andrea`,
    bio: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    name: `The Other`,
    bio: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
]

type Props = {}

export default function Team(props: Props) {
  return (
    <main className='w-3/5 h-auto mx-auto bg-slate-700 pb-16 mb-10 mt-20'>
      <div id='team' className='flex flex-wrap justify-around h-auto pb-10 mt-10'>
        <h1 className='font-lg w-full text-accent font-semibold text-center mt-6 text-3xl'>Team</h1>
        <div className='flex flex-wrap justify-center w-full'>
          {TeamArray.map((team, index) => (
            <div
              key={index}
              className={`border-slate-700 bg-slate-800 w-46 h-1/2 items-left justify-evenly xl:m-6 lg:m-4 m-2 p-6 rounded-md border-2`}
            >
              <div className='mb-4 flex-row justify-content-between'>
                <div className='flex items-center'>
                  <div>
                    <Image
                      src='/../public/Images/Birdie_02.png'
                      height={60}
                      width={60}
                      alt='A face'
                    />
                  </div>
                  <div>
                    <h1 className={`text-accent text-xl font-semibold text-left pb-3 ml-2 w-40`}>
                      {team.name}
                    </h1>
                  </div>
                </div>
                <p className={`text-gray-300 text-left line-clamp-10 ml-2 w-56`}>{team.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
