import React from "react"
import Image from "next/image"
import GitHubOctocat from "../public/Images/github_octocat.png"

type Props = {}

export default function Documentation(props: Props) {
  return (
    <section id='documentation' className='text-center bg-slate-700'>
      <h1 className='font-lg w-full text-accent font-semibold text-center mb-6 text-3xl pt-12 pb-16'>
        Technologies
      </h1>
      <div className='flex flex-col'>
        {/* Top Two */}
        <div className='w-full flex justify-between px-64'>
          <div className='w-1/3 bg-slate-800 rounded-mds my-6 mx-auto'>
            <Image
              src={GitHubOctocat}
              height={300}
              alt='GitHub Icon'
              className='py-10 w-fit pl-10'
            />
          </div>
          <div className='w-1/3 bg-slate-800 rounded-mds my-6 mx-auto pb-10'>
            <Image
              src={GitHubOctocat}
              height={300}
              alt='GitHub Icon'
              className='pb-10 pt-4 pl-4 w-fit'
            />
          </div>
        </div>
        {/* Bottom Two */}
      </div>
    </section>
  )
}
