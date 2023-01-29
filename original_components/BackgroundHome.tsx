import React, { FC } from "react"

interface BackgroundHomeProps {
  children: React.ReactNode
}

const BackgroundHome: FC<BackgroundHomeProps> = ({ children }) => {
  return (
    <div className='h-screen relative'>
      <svg className='absolute top-0 left-0 w-full h-full' viewBox='0 0 1440 01'>
        <path
          fill='lightsteelblue'
          fillOpacity='1'
          d='M0,96L80,122.7C160,149,320,203,480,218.7C640,235,800,213,960,197.3C1120,181,1280,171,1360,170.7L1440,171L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        ></path>
      </svg>
      {children}
    </div>
  )
}

export default BackgroundHome
