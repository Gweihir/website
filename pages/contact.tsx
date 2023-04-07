import NavBar from "@/original_components/NavBar"
import Contact from "@/original_components/Contact"

const links = [{ href: "/", label: "Home" }]

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
