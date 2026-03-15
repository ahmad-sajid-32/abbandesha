import { Section } from "@/components/ui/section"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const steps = [
  {
    num: "1",
    title: "Discovery & Strategy",
    description: "We deep-dive into your business goals, identify pain points, and map out a bespoke strategic roadmap."
  },
  {
    num: "2",
    title: "Execution & Management",
    description: "Our team takes the lead, implementing digital initiatives and managing projects with precision reporting."
  },
  {
    num: "3",
    title: "Optimization & Scaling",
    description: "Continuous monitoring and data-driven adjustments to ensure your business continues to scale efficiently."
  }
]

export function HowWeWork() {
  return (
    <Section className="bg-slate-900 text-white">
      <ScrollReveal direction="up" className="text-center mb-12 md:mb-16 xl:mb-20">
        <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm xl:text-base mb-3 md:mb-4">The Methodology</h2>
        <h3 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-3 md:mb-4">How We Work</h3>
        <p className="text-slate-400 max-w-2xl xl:max-w-3xl mx-auto text-base md:text-lg xl:text-xl px-4">
          Our streamlined consultancy framework is designed for maximum impact and minimum friction.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-10 md:gap-12 xl:gap-16 relative">
        <div className="hidden md:block absolute top-10 xl:top-12 left-0 w-full h-0.5 bg-slate-800 z-0"></div>
        {steps.map((step, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.2} className="relative z-10 text-center space-y-3 md:space-y-4 xl:space-y-6">
            <div className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 bg-primary rounded-full flex items-center justify-center text-2xl md:text-3xl xl:text-4xl font-black mx-auto border-4 md:border-8 border-slate-900 text-primary-foreground">
              {step.num}
            </div>
            <h4 className="text-lg md:text-xl xl:text-2xl font-bold">{step.title}</h4>
            <p className="text-slate-400 text-sm xl:text-base">{step.description}</p>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
