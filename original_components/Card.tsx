import React from "react"

interface CardProps {
  icon?: React.ReactNode
  title: string
  body: string
  backgroundColor: string
  borderColor: string
  bodyTextColor: string
  titleTextColor: string
  width: string
  height: string
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  body,
  backgroundColor,
  borderColor,
  bodyTextColor,
  titleTextColor,
  width,
  height,
}) => {
  return (
    <div
      className={`${borderColor} ${backgroundColor} ${width} ${height} w-full flex flex-wrap items-left justify-evenly xl:m-6 lg:m-4 m-2 p-6 rounded-md border-2`}
    >
      <div className='mb-4'>{icon}</div>
      <h1 className={`${titleTextColor} text-xl font-bold text-left pb-3`}>{title}</h1>
      <p className={`${bodyTextColor} text-left line-clamp-10`}>{body}</p>
    </div>
  )
}

export default Card
