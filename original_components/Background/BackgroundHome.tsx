import React, { FC } from "react"
import styles from "./index.module.css"

interface BackgroundHomeProps {
  children: React.ReactNode
}

const BackgroundHome: FC<BackgroundHomeProps> = ({ children }) => {
  return (
    <div className='h-screen relative'>
      <svg className='absolute top-0 left-0 w-full h-full' viewBox='0 0 1440 01'>
        <rect
          x='0'
          y='96'
          width='1440'
          height='224'
          fill='url(#gradient)'
          className={styles.smokePath}
        />

        <defs>
          <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='50%' stop-color='#0F172A' />
            <stop offset='100%' stop-color='#B5E1F9' />
          </linearGradient>
        </defs>
      </svg>
      {children}
    </div>
  )
}

export default BackgroundHome
