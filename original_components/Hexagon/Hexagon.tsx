import React from "react"
import styles from "./index.module.css"

interface HexagonProps {
  children: React.ReactNode
}

const Hexagon: React.FC<HexagonProps> = ({ children }) => (
  <div className='relative w-64 h-164 m-auto'>
    <div className={`w-full h-full bg-gray-900 bg-cover bg-center ${styles.hexagon} rounded-full`}>
      {children}
    </div>
    <div
      className={`w-full h-full inset-0 ${styles.hexagon} bg-gray-900 opacity-75 rounded-full`}
    ></div>
  </div>
)

export default Hexagon
