import React from "react"

type ButtonProps = {
  buttonText: string
  onClick: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({ buttonText, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`py-2 px-4 rounded-lg text-black bg-primary hover:bg-secondary active:bg-accent ${className}`}
  >
    {buttonText}
  </button>
)

export default Button
