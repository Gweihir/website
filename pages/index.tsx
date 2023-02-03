import Head from "next/head"
import { Inter } from "@next/font/google"
import HomePage from "./home"
import Technologies from "./technologies"
import NavBar from "@/original_components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Gweihir</title>
        <meta property='og:title' content='Project Gweihir' />
        <meta property='og:image' content='../public/Images/epic_thumbnail.png' />
      </Head>
      <NavBar />
      <HomePage />
      {/* <Technologies /> */}
    </>
  )
}
