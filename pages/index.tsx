import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import HomePage from "./home"
import Technologies from "./technologies"
import BackgroundHome from "../original_components/Background/BackgroundHome"
import Hexagon from "@/original_components/Hexagon/Hexagon"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Gweihir</title>
      </Head>
      {/* <Hexagon> */}
      <HomePage />
      {/* </Hexagon> */}
      {/* <Technologies /> */}
    </>
  )
}
