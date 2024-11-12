import About from "@/components/about"
import { Contact } from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Work from "@/components/work"

export default function Home() {
  return (
    <div className="space-y-28">
      <Header />
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
