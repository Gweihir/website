import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import HomePage from "./home"
import Technologies from "./technologies"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Gweihir</title>
      </Head>
      <HomePage />
      <Technologies />
    </>
  )
}
