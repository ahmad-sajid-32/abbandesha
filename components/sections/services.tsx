import { Section } from "@/components/ui/section"
import { Target, Network, LineChart, Headset } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const services = [
  {
    title: "Business Consultancy",
    description: "Strategic advice to optimize your business model, market positioning, and long-term roadmap.",
    icon: Target
  },
  {
    title: "Digital Project Management",
    description: "End-to-end management of digital initiatives from initial conception to successful global launch.",
    icon: Network
  },
  {
    title: "Data Analytics & Reporting",
    description: "Turning raw data into actionable business insights for informed and profitable decision-making.",
    icon: LineChart
  },
  {
    title: "Customer Support Management",
    description: "Building scalable support systems to enhance customer satisfaction and brand loyalty.",
    icon: Headset
  }
]

export function Services() {
  return (
    <Section id="services" className="bg-background">
      <ScrollReveal direction="up" className="text-center mb-12 md:mb-16 xl:mb-20">
        <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm xl:text-base mb-3 md:mb-4">Our Expertise</h2>
        <h3 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground">Our Services</h3>
        <p className="mt-3 md:mt-4 xl:mt-6 text-muted-foreground max-w-2xl xl:max-w-3xl mx-auto text-base md:text-lg xl:text-xl px-4">
          Tailored solutions designed to scale your business efficiently in a digital-first world.
        </p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
        {services.map((service, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.1}>
            <div className="bg-surface p-6 md:p-8 xl:p-10 rounded-2xl border border-border hover:shadow-xl hover:border-primary/30 transition-all group h-full">
              <div className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 md:mb-6 xl:mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
              </div>
              <h4 className="text-lg md:text-xl xl:text-2xl font-bold text-foreground mb-2 md:mb-3 xl:mb-4">{service.title}</h4>
              <p className="text-muted-foreground text-sm xl:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
