import React from "react"

type ButtonProps = {
  buttonText: string
  onClick: () => void
  className?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ buttonText, onClick, className = "", disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`py-2 font-semibold cursor-pointer px-4 text-sm sm:text-base rounded-lg text-slate-700 bg-primary ${
      disabled && "bg-gray-400"
    } ${!disabled && "hover:bg-accent"} ${!disabled && "active:bg-thirdinary"} ${className}`}
  >
    {buttonText}
  </button>
)

export default Button
