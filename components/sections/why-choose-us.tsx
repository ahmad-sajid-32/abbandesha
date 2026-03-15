import { Section } from "@/components/ui/section";
import { ShieldCheck, Eye, Globe, TrendingUp } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const features = [
  {
    title: "Reliable Execution",
    description:
      "Dependable delivery frameworks that ensure milestones are always met on time.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Processes",
    description:
      "Open communication channels and clear reporting on every phase of engagement.",
    icon: Eye,
  },
  {
    title: "Global Service Mindset",
    description:
      "International perspective designed to help brands scale across different borders.",
    icon: Globe,
  },
  {
    title: "Growth-Focused Support",
    description:
      "Beyond maintenance, we focus on identifying and capturing growth opportunities.",
    icon: TrendingUp,
  },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-surface overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <ScrollReveal direction="right" className="w-full lg:w-1/2">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Core Strengths
          </h2>
          <h3 className="text-4xl font-extrabold text-foreground mb-8">
            Why Businesses Work With Us
          </h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="space-y-3">
                <div className="text-primary">
                  <feature.icon className="h-10 w-10" />
                </div>
                <h4 className="text-lg font-bold text-foreground">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal direction="left" className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 transform scale-105"></div>
          <div className="relative z-10 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/why-choose-us-image.png"
              alt="Strategic business planning"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
