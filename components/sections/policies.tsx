import { Section } from "@/components/ui/section"
import { CircleDollarSign, Truck } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Policies() {
  return (
    <Section className="bg-surface">
      <div className="grid md:grid-cols-2 gap-12">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-background p-10 rounded-2xl border border-border h-full">
            <div className="flex items-center gap-3 mb-6">
              <CircleDollarSign className="text-primary h-8 w-8" />
              <h3 className="text-2xl font-bold text-foreground">Refund Policy</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At ABBANDESHA LTD, we strive for total client satisfaction. Consultative services are billed based on project milestones. If a project is cancelled during its initial phase, a partial refund may be issued proportional to the work remaining.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Custom software and dedicated management retainers are non-refundable once the service period has commenced. Full terms are provided in individual service agreements.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-background p-10 rounded-2xl border border-border h-full">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="text-primary h-8 w-8" />
              <h3 className="text-2xl font-bold text-foreground">Delivery Policy</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Digital deliverables and consultancy reports are delivered electronically via secure client portals or encrypted email. Standard turnaround for strategy documents is 10-15 business days.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ongoing management services are delivered in accordance with agreed-upon weekly or monthly SLAs. Immediate emergency support is available for enterprise-tier clients.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
