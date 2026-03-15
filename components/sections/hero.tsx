"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10"></div>
        <Image
          src="/hero-image.png"
          alt="Modern high-end glass office interior"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-20 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
        <div className="max-w-3xl xl:max-w-4xl">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now Partnering with Global Brands
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tight mb-6">
              Empowering Businesses with{" "}
              <span className="text-primary">Strategic</span> Digital Solutions.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-2xl xl:max-w-3xl">
              ABBANDESHA LTD provides high-end consultancy and management
              services to help global brands scale efficiently in a competitive
              digital landscape.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button
                size="lg"
                className="text-base h-14 px-8 xl:px-10 hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => scrollToSection("contact")}
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base h-14 px-8 xl:px-10 bg-surface w-full sm:w-auto"
                onClick={() => scrollToSection("services")}
              >
                View Our Services
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
