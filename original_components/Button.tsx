import React from "react"

type ButtonProps = {
  buttonText: string
  onClick: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({ buttonText, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`py-2 px-4 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-600 ${className}`}
  >
    {buttonText}
  </button>
)

export default Button
