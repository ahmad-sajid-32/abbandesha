import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { HowWeWork } from "@/components/sections/how-we-work"
import { Policies } from "@/components/sections/policies"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { Loader } from "@/components/ui/loader"
import { GoToTop } from "@/components/ui/go-to-top"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Loader />
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <HowWeWork />
        <Policies />
        <Contact />
      </main>
      <Footer />
      <GoToTop />
    </div>
  )
}
