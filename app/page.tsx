import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Booking } from "@/components/booking"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingButton } from "@/components/floating-button"

export default function Home() {
  return (
    <main className="bg-[#0B0B0B] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Booking />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingButton />
    </main>
  )
}
