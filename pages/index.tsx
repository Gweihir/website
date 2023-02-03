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
        <meta
          property='og:image'
          content='https://website-one-delta-18.vercel.app/Images/epic_thumbnail.png'
        />
        <meta
          property='og:description'
          content={`An open-source project to service Kusama's chain data to the Ethereum network via a Chainlink external adapter.`}
        />
        <meta property='og:image:alt' content='Project Gweihir thumbnail image' />
      </Head>
      <NavBar />
      <HomePage />
      {/* <Technologies /> */}
    </>
  )
}
