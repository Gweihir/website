import React from "react"
import Card from "@/original_components/Card"
import Image from "next/image"
import DeskGuy from "../public/Images/Guy_Desk_02.png"
import DigitalContract from "../public/Images/Digi_Con_02.png"
import Birdie from "../public/Images/Birdie_02.png"
import Servers from "../public/Images/Servers_04.png"

type Props = {}

export default function UsersPage(props: Props) {
  return (
    <section className='text-center'>
      <div className='flex flex-wrap justify-evenly pt-12 sm:px-32'>
        <h1 className='font-lg w-full text-accent font-semibold text-center mb-8 text-3xl'>
          Our Users
        </h1>
        <div className='w-full flex flex-row justify-items-between mt-11'>
          {/* Kusama Users */}
          <div className='flex flex-row justify-center mt-4 w-1/3 text-left'>
            <div className='w-full'>
              <div className='mx-auto'>
                <h1 className='text-accent font-semibold text-lg text-center pb-7'>
                  ~ Kusama Users ~
                </h1>
                <Image
                  src={Birdie}
                  height={200}
                  alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                  className='md:pb-10 mx-auto'
                />
              </div>
              <p className='text-white text-left px-4'>
                Gweihir provides a valuable opportunity for Kusama users to expand their
                productivity and impact beyond the Kusama ecosystem and into the Ethereum
                blockchain. This impact is not limited to financial gains and does not require the
                use of a centralized exchange. For founders launching parachains on Kusama, Gweihir
                can be particularly valuable. They can associate their substrate accounts with
                Ethereum accounts and offer more robust rewards to their community. This can
                incentivize more participation and engagement from users, and ultimately help the
                founders achieve their goals faster and more effectively. By bridging data between
                Kusama and Ethereum, Gweihir enables Kusama users to access a broader range of
                opportunities and resources, beyond what is available in the Kusama ecosystem alone.
                This can drive innovation, collaboration, and growth in both ecosystems, ultimately
                benefiting users of both networks.
              </p>
            </div>
          </div>
          {/* DeskGuy */}
          <div className='flex flex-row justify-center w-1/3 text-left -mt-10'>
            <div>
              <Image
                src={DeskGuy}
                height={400}
                alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                className='md:pb-10 mx-auto'
              />
              <div className='text-white bg-slate-700 rounded-md mx-4 p-6'>
                {" "}
                Gweihir enables users to bridge data between the Kusama and Ethereum blockchains,
                providing reliable and secure access to real-time data for smart contract
                developers. This increases interoperability between the two ecosystems, enhances the
                security and accuracy of smart contracts, and creates new revenue streams for node
                operators. Gweihir's services can also benefit founders launching parachains on
                Kusama by allowing them to associate their substrate accounts with Ethereum accounts
                and offer more robust rewards to their community. Ultimately, Gweihir's data
                bridging services can drive innovation, collaboration, and growth in the Kusama and
                Ethereum ecosystems.
              </div>
            </div>
          </div>
          {/* Smart Contract Devs */}
          <div className='flex flex-row justify-center mt-4 w-1/3 text-left'>
            <div>
              <h1 className='text-accent font-semibold text-lg text-center pb-7'>
                ~ Smart Contract Devs ~
              </h1>
              <Image
                src={DigitalContract}
                height={200}
                alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                className='md:pb-10 mx-auto'
              />
              <p className='text-white text-left px-4'>
                Accessing data from multiple sources can be challenging, especially when dealing
                with decentralized data networks such as Kusama and Ethereum. This is where Gweihir
                comes in. Gweihir provides smart contract developers with a secure and efficient way
                to bridge data from Kusama to the Ethereum blockchain. By using Chainlink nodes,
                Gweihir ensures that the data is verified and accurate, making it ideal for use in
                smart contracts. This bridging process is end-to-end secure, which ensures that the
                data is tamper-proof and cannot be manipulated. By using Gweihir, smart contract
                developers can access data from Kusama in real-time, which makes it possible to
                automate the execution of their contracts. Additionally, since the data is verified,
                developers can be confident that the contracts will execute as intended, without the
                risk of errors or failures due to faulty data.
              </p>
            </div>
          </div>
        </div>
        {/* Node Operators */}
        <div className='flex flex-row items-center px-10 justify-center mt-4 text-left'>
          <div className='flex flex-row items-center w-3/4'>
            <div className='flex flex-col items-center justify-center min-w-fit'>
              <h1
                className='text-accent font-semibold text-lg w-full mx-auto pb-4 pt-4'
                style={{ textAlign: "center" }}
              >
                ~ Node Operators ~
              </h1>
              <div>
                <Image
                  src={Servers}
                  height={200}
                  alt='Image of Gweihir Interacting with Ethereum via Chainlink'
                  className='md:pb-10'
                />
              </div>
            </div>
            <div>
              <p className='text-white pl-8'>
                Gweihir can appeal to node operators because it provides a new opportunity to
                generate revenue by providing data bridging services to smart contract developers.
                By running a Gweihir node, operators can offer a valuable service that enables smart
                contracts to access real-time, reliable data from the Kusama blockchain.
                Additionally, Gweihir is designed to be user-friendly and easy to integrate with
                existing infrastructure, thanks to its use of Chainlink nodes. This can make it an
                attractive option for node operators who are looking for new opportunities but do
                not want to invest significant time and resources in learning new technologies or
                systems. Finally, Gweihir's emphasis on security and end-to-end encryption can help
                node operators build trust with their clients and ensure that the data they provide
                is reliable and accurate. This can help them establish a reputation as a
                high-quality provider of data bridging services and attract more clients over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
