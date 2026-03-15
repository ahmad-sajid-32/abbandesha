import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function About() {
  return (
    <Section id="about" className="bg-surface">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
        <ScrollReveal direction="right">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 xl:w-32 xl:h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="relative aspect-[4/3] w-full z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-image.png"
                alt="Business professionals collaborating"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 md:p-8 xl:p-10 rounded-2xl shadow-xl z-20 hidden sm:block">
              <p className="text-primary-foreground text-3xl md:text-4xl xl:text-5xl font-black">
                10+
              </p>
              <p className="text-primary-foreground/80 text-xs md:text-sm xl:text-base font-medium uppercase tracking-widest mt-1">
                Years of Excellence
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="left">
          <div className="space-y-4 md:space-y-6 xl:space-y-8">
            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm xl:text-base">
              About ABBANDESHA LTD
            </h2>
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground leading-tight">
              Driving operational excellence for modern enterprises.
            </h3>
            <p className="text-base md:text-lg xl:text-xl text-muted-foreground leading-relaxed">
              ABBANDESHA LTD is a UK-based consultancy dedicated to driving
              operational excellence. We partner with global brands to
              streamline their digital presence and manage complex projects with
              precision and a growth-focused mindset.
            </p>
            <p className="text-base md:text-lg xl:text-xl text-muted-foreground leading-relaxed">
              Our team of experts brings a wealth of experience in navigating
              the complexities of digital transformation, ensuring that your
              business not only stays relevant but leads the market.
            </p>
            <ul className="space-y-3 md:space-y-4 xl:space-y-5 pt-2 md:pt-4 xl:pt-6">
              {[
                "UK-based Strategic Consulting",
                "Global Project Delivery Capabilities",
                "Enterprise-level Data Management",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 xl:gap-4 text-foreground text-sm md:text-base xl:text-lg"
                >
                  <CheckCircle2 className="text-primary h-5 w-5 md:h-6 md:w-6 xl:h-7 xl:w-7 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
