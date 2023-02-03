import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta property='og:title' content='Project Gweihir' />
        <meta property='og:image' content='/Images/epic_thumbnail.png' />
        <meta property='og:description' content='A description of Project Gweihir' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
