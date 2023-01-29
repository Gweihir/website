import Footer from "@/original_components/Footer"
import NavBar from "@/original_components/NavBar"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Inter } from "@next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${inter.variable} font-sans`}>
        <NavBar />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </main>
    </>
  )
}
