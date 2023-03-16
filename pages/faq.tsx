import React from "react"

const qAArray = [
  {
    question: `What are the advantages of using Chainlink to bridge Kusama to Ethereum?`,
    answer: (
      <div>
        <li>
          Reliability: Chainlink provides high-quality data inputs that are resistant to tampering
          and manipulation. This makes it possible to trust the data inputs used in smart contracts,
          which is essential for accurate execution of the contract.
        </li>
        <br />
        <li>
          Security: Chainlink uses multiple independent oracles to provide a decentralized and
          secure source of data inputs. This reduces the risk of a single point of failure or
          attack.
        </li>
        <br />
        <li>
          Interoperability: By bridging Kusama to Ethereum using Chainlink, it is possible to enable
          interoperability between the two blockchains. This can help to create new opportunities
          for collaboration and innovation between the two communities.
        </li>
        <br />
        <li>
          Scalability: Chainlink's oracle network can handle large volumes of data inputs and
          outputs, making it possible to support high-performance smart contracts and applications.
        </li>
        <br />
        <li>
          Flexibility: Chainlink can be used to bridge different blockchains, making it possible to
          create cross-chain applications and services. This flexibility can enable new use cases
          and business models that were not possible before.
        </li>
      </div>
    ),
  },
  {
    question: `What are the advantages of using Kusama?`,
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
          Finally, Kusama's focus on experimentation and innovation makes it an attractive platform
          for developers who are looking to build new and innovative dApps. Kusama has a vibrant
          developer community that is constantly exploring new use cases and applications for
          blockchain technology, and this can help to drive innovation and growth in the ecosystem.
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
    question: `What could developers conceivably create using Gweihir?`,
    answer: (
      <div>
        <li>
          Cross-chain applications: Gwehir can enable developers to create cross-chain applications
          that utilize the best of both Kusama and Ethereum networks. For example, developers could
          create a decentralized exchange (DEX) that supports trading between Kusama-based tokens
          and Ethereum-based tokens.
        </li>
        <br />
        <li>
          Decentralized finance (DeFi) applications: Gwehir can facilitate the creation of DeFi
          applications that leverage the unique features of Kusama and Ethereum. For example,
          developers could create a lending protocol that allows users to borrow Kusama-based tokens
          on the Ethereum network.
        </li>
        <br />
        <li>
          Gaming and NFT applications: Developers could create gaming and non-fungible token (NFT)
          applications that use Gwehir to enable cross-chain transactions. For example, a game could
          reward players with Kusama-based NFTs that can be used in Ethereum-based games or sold on
          Ethereum-based NFT marketplaces.
        </li>
        <br />
        <li>
          Supply chain applications: Developers could use Gwehir to create supply chain applications
          that track the movement of goods and assets across Kusama and Ethereum networks. For
          example, a logistics company could use Gwehir to track the movement of goods across
          multiple blockchains, providing an immutable record of the entire supply chain.
        </li>
      </div>
    ),
  },
]

type Props = {}

export default function Faq(props: Props) {
  return (
    <main>
      <div className='bg-slate-800 flex flex-col justify-center h-auto pb-10'>
        <h1 className='font-lg w-full text-accent font-bold text-center mt-6 text-3xl'>FAQ</h1>
        <div id='technologies' className='justify-center'>
          <div className='bg-slate-800 justify-center'>
            {qAArray.map((qa, index) => (
              <>
                <div className='pt-10 px-10 sm:px-24 md:px-40 lg:px-72' key={index}>
                  <h1 className=' text-accent text-xl'>{qa.question}</h1>
                  <br />
                  <p className=' text-gray-300 ml-6'>{qa.answer}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
