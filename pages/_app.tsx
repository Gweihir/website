import "../styles/globals.css"
import type { AppProps } from "next/app"
import NavBar from "../ordinary_components/NavBar"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
