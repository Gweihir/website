import React from "react"
import Head from "next/head"
import { Inter } from "@next/font/google"
import HomePage from "./home"
import Technologies from "./technologies"
import NavBar from "@/original_components/NavBar"
import UsersPage from "./clientele"
import Resources from "./resources"
import Team from "./team"
import BirdHead from "@/original_components/BirdHead"

const fbAppId = process.env.FB_APP_ID

//TODO delete inter?
const inter = Inter({ subsets: ["latin"] })
const links = [
  { href: "#technologies", label: "Technologies" },
  { href: "#clientele", label: "Clientele" },
  { href: "#resources", label: "Resources" },
  { href: "#team", label: "Team" },
  { href: "/contact", label: "Contact" },
]

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen'>
      <NavBar className='z-50' links={links} />

      <div>{children}</div>
    </div>
  )
}

// TODO: Update all of the below meta info with correct URL before we launch on correct URL
// TODO: Add LinkedIn Author and Publish Date

interface HomeProps {}

export default function Home({}: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Project Gweihir</title>
        <meta property='og:url' content='https://gweihir.io' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Discover Project Gweihir: Bridging Kusama to Ethereum via Chainlink'
        />
        <meta property='og:image' content='https://gweihir.io/Images/epic_thumbnail.png' />
        <meta
          property='og:description'
          content={`An open-source project to service Kusama's chain data to the Ethereum network via a Chainlink external adapter.`}
        />
        <meta property='og:image:alt' content='Project Gweihir thumbnail image' />
        <meta property='fb:app:id' content={fbAppId} />
        {/* TWITTER */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Discover Project Gweihir: Bridging Kusama to Ethereum via Chainlink'
        />
        <meta
          name='twitter:description'
          content={`An open-source project to service Kusama's chain data to the Ethereum network via a Chainlink external adapter.`}
        />
        <meta name='twitter:image' content='https://gweihir.io/Images/epic_thumbnail.png' />
      </Head>
      <Layout>
        <BirdHead />
        <HomePage />
        <Technologies />
        <UsersPage />
        <Team />
        <Resources />
      </Layout>
    </>
  )
}
