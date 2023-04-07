import NavBar from "@/original_components/NavBar"
import Contact from "@/original_components/Contact"

const links = [
  { href: "/", label: "Home" },
  { href: "/#technologies", label: "Technologies" },
  { href: "/#clientele", label: "Clientele" },
  { href: "/#resources", label: "Resources" },
  // { href: "#roadMap", label: "Road Map" },
  // { href: "#faq", label: "FAQ" },
  { href: "/#team", label: "Team" },
]

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen'>
      <NavBar links={links} className='z-50' />
      <div>{children}</div>
    </div>
  )
}

const ContactPage = () => {
  return (
    <>
      <Layout>
        <Contact />
      </Layout>
    </>
  )
}

export default ContactPage
