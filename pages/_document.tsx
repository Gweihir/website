import { Html, Head, Main, NextScript } from "next/document"

const fbAppId = process.env.FB_APP_ID

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta property='og:type' content='website' />
        <meta property='fb:app_id' content={fbAppId} />
        <meta property='og:title' content='Project Gweihir, Expanding What is Possible' />
        <meta
          property='og:image'
          content='https://website-one-delta-18.vercel.app/Images/epic_thumbnail.png'
        />
        <meta property='og:url' content='https://website-one-delta-18.vercel.app' />
        <meta
          property='og:description'
          content={`An open-source project to service Kusama's chain data to the Ethereum network via a Chainlink external adapter.`}
        />
        <meta property='og:image:alt' content='Project Gweihir thumbnail image' />
        {/* TWITTER */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Project Gweihir, Expanding What is Possible' />
        <meta
          name='twitter:description'
          content={`An open-source project to service Kusama's chain data to the Ethereum network via a Chainlink external adapter.`}
        />
        <meta
          name='twitter:image'
          content='https://website-one-delta-18.vercel.app/Images/epic_thumbnail.png'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
