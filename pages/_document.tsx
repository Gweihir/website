import { Html, Head, Main, NextScript } from "next/document"

const fbAppId = process.env.FB_APP_ID
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
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
        <meta property='fb:app:id' content={`${process.env.FB_APP_ID}`} />
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
