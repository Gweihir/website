import React from "react"

const qAArray = [
  {
    question: `What is Kusama?`,
    answer: (
      <div>
        Kusama is a &quot;relay chain&quot; (a.k.a. layer 0) built using Substrate and secured by a
        proof-of-stake consensus protocol. In other words, Kusama provides network security and
        cross-chain infrastructure for all blockchains that are connected to its
        &quot;parachain&quot; slots. This configuration allows developers to deploy highly
        customizable blockchain technologies without needing to bootstrap their own security. As a
        result, dozens of blockchains have deployed on Kusama providing the ecosystem with defi, EVM
        compatibility, privacy, credentialing, decentralized storage, social media, metaverse and
        NFT technologies, and more!
      </div>
    ),
  },

  {
    question: `What does Kusama have to offer?`,
    answer: (
      <div>
        <li>
          Kusama is a blockchain network that is designed to be a scalable and interoperable
          platform for building decentralized applications (dApps). It is built on the same codebase
          as Polkadot, another popular blockchain network, and is focused on providing a platform
          for experimentation and innovation.
        </li>
        <br />
        <li>
          One advantage of using Kusama is its high scalability. Kusama uses a unique sharding
          mechanism that enables it to process transactions in parallel across multiple shards. This
          can help to improve the overall throughput and speed of the network, making it more
          efficient and cost-effective for developers.
        </li>
        <br />
        <li>
          Another advantage of using Kusama is its interoperability. Kusama is designed to be
          compatible with other blockchain networks, including Ethereum. This makes it possible to
          create cross-chain applications and services that can interact with multiple blockchain
          networks at the same time.
        </li>
        <br />
        <li>
          Finally, Kusama&apos;s focus on experimentation and innovation makes it an attractive
          platform for developers who are looking to build new and innovative dApps. Kusama has a
          vibrant developer community that is constantly exploring new use cases and applications
          for blockchain technology, and this can help to drive innovation and growth in the
          ecosystem.
        </li>
        <br />
        <li>
          Overall, the advantages of using Kusama as a platform for building dApps include its
          scalability, interoperability, and focus on innovation and experimentation. These features
          can help developers to create more efficient, flexible, and innovative blockchain-based
          applications that can interact with multiple blockchain networks at the same time.
        </li>
      </div>
    ),
  },
  {
    question: `Why use Chainlink to bridge Kusama to Ethereum?`,
    answer: (
      <div>
        <li>
          Reliability:&nbsp; Chainlink provides high-quality data inputs that are resistant to
          tampering and manipulation. This makes it possible to trust the data inputs used in smart
          contracts, which is essential for accurate execution of the contract.
        </li>
        <br />
        <li>
          Security:&nbsp; Chainlink uses multiple independent oracles to provide a decentralized and
          secure source of data inputs. This reduces the risk of a single point of failure or
          attack.
        </li>
        <br />
        <li>
          Interoperability:&nbsp; By bridging Kusama to Ethereum using Chainlink, it is possible to
          enable interoperability between the two blockchains. This can help to create new
          opportunities for collaboration and innovation between the two communities.
        </li>
        <br />
        <li>
          Scalability:&nbsp; Chainlink&apos;s oracle network can handle large volumes of data inputs
          and outputs, making it possible to support high-performance smart contracts and
          applications.
        </li>
        <br />
        <li>
          Flexibility:&nbsp; Chainlink can be used to bridge different blockchains, making it
          possible to create cross-chain applications and services. This flexibility can enable new
          use cases and business models that were not possible before.
        </li>
      </div>
    ),
  },
  {
    question: `What are some of Gweihir's primary applications?`,
    answer: (
      <div>
        <li>
          Cross-chain situations:&nbsp; Gweihir can enable developers to create cross-chain
          applications that utilize the best of both Kusama and Ethereum networks. For example,
          developers could create a decentralized exchange (DEX) that supports trading between
          Kusama-based tokens and Ethereum-based tokens.
        </li>
        <br />
        <li>
          Decentralized finance (DeFi):&nbsp; Gweihir can facilitate the creation of DeFi
          applications that leverage the unique features of Kusama and Ethereum. For example,
          developers could create a lending protocol that allows users to borrow Kusama-based tokens
          on the Ethereum network.
        </li>
        <br />
        <li>
          Gaming and NFT projects:&nbsp; Developers could create gaming and non-fungible token (NFT)
          applications that use Gweihir to enable cross-chain transactions. For example, a game
          could reward players with Kusama-based NFTs that can be used in Ethereum-based games or
          sold on Ethereum-based NFT marketplaces.
        </li>
        <br />
        <li>
          Supply chain solutions:&nbsp; Developers could use Gweihir to create supply chain
          applications that track the movement of goods and assets across Kusama and Ethereum
          networks. For example, a logistics company could use Gweihir to track the movement of
          goods across multiple blockchains, providing an immutable record of the entire supply
          chain.
        </li>
      </div>
    ),
  },
]

type Props = {}

export default function Faq(props: Props) {
  return (
    <main>
      <div id='faq' className='bg-slate-800 flex flex-col justify-center h-auto pb-10'>
        <h1 className='font-lg w-full text-accent font-bold text-center mt-6 text-3xl'>FAQ</h1>
        <div id='technologies' className='justify-center'>
          <div className='bg-slate-800 justify-center'>
            {qAArray.map((qa, index) => (
              <>
                <div className='pt-10 px-10 sm:px-24 md:px-34 lg:px-44 xl:px-60' key={index}>
                  <h1 className=' text-accent text-xl'>{qa.question}</h1>
                  <br />
                  <div className=' text-gray-300 ml-6'>{qa.answer}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
